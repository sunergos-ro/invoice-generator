"use client";

import { useEffect, useState, useMemo, FC } from "react";
import Image from "next/image";
import { countries } from "countries-list";

const EU_VAT_RATES: Record<string, { standard: number; countryCode: string }> = {
  "AT": { standard: 20, countryCode: "AT" }, // Austria
  "BE": { standard: 21, countryCode: "BE" }, // Belgium
  "BG": { standard: 20, countryCode: "BG" }, // Bulgaria
  "HR": { standard: 25, countryCode: "HR" }, // Croatia
  "CY": { standard: 19, countryCode: "CY" }, // Cyprus
  "CZ": { standard: 21, countryCode: "CZ" }, // Czech Republic
  "DK": { standard: 25, countryCode: "DK" }, // Denmark
  "EE": { standard: 22, countryCode: "EE" }, // Estonia
  "FI": { standard: 25.5, countryCode: "FI" }, // Finland
  "FR": { standard: 20, countryCode: "FR" }, // France
  "DE": { standard: 19, countryCode: "DE" }, // Germany
  "GR": { standard: 24, countryCode: "GR" }, // Greece
  "HU": { standard: 27, countryCode: "HU" }, // Hungary
  "IE": { standard: 23, countryCode: "IE" }, // Ireland
  "IT": { standard: 22, countryCode: "IT" }, // Italy
  "LV": { standard: 21, countryCode: "LV" }, // Latvia
  "LT": { standard: 21, countryCode: "LT" }, // Lithuania
  "LU": { standard: 17, countryCode: "LU" }, // Luxembourg
  "MT": { standard: 18, countryCode: "MT" }, // Malta
  "NL": { standard: 21, countryCode: "NL" }, // Netherlands
  "PL": { standard: 23, countryCode: "PL" }, // Poland
  "PT": { standard: 23, countryCode: "PT" }, // Portugal
  "RO": { standard: 19, countryCode: "RO" }, // Romania
  "SK": { standard: 23, countryCode: "SK" }, // Slovakia
  "SI": { standard: 22, countryCode: "SI" }, // Slovenia
  "ES": { standard: 21, countryCode: "ES" }, // Spain
  "SE": { standard: 25, countryCode: "SE" }, // Sweden
};

const EU_COUNTRY_CODES = Object.keys(EU_VAT_RATES);

const getCountryList = () => {
  return Object.entries(countries)
    .map(([code, data]) => ({ code, name: data.name }))
    .sort((a, b) => a.name.localeCompare(b.name));
};

const isValidImageUrl = (url: string): boolean => {
  if (!url) return false;
  if (url.startsWith('/')) return true; // local paths are valid
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

interface InvoiceData {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  
  companyLogoUrl: string;
  companyName: string;
  companyAddress: string;
  companyCountry: string;
  
  customerName: string;
  customerAddress: string;
  customerCountry: string;
  customerVat: string;

  items: InvoiceItem[];
  
  isReverseCharge: boolean;
  
  notes: string;
}

interface EditableFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  isTextarea?: boolean;
  rows?: number;
}

const EditableField: FC<EditableFieldProps> = ({ value, onChange, placeholder, className, isTextarea = false, rows = 4 }) => {
  const commonProps = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
    placeholder,
    className: `text-gray-800 placeholder-gray-400 bg-transparent focus:bg-gray-100 p-1 -m-1 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-400 hover:bg-gray-50 transition-colors print-no-placeholder ${className}`
  };

  return isTextarea ? <textarea {...commonProps} rows={rows} /> : <input type="text" {...commonProps} />;
};

const defaultInvoiceData: InvoiceData = {
  invoiceNumber: "0001",
  issueDate: new Date().toISOString().split('T')[0],
  dueDate: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split('T')[0],
  companyLogoUrl: "/git-digest-logo.png",
  companyName: "Sunergos IT LLC",
  companyAddress: "Martir Marius Ciopec 18\nsc. C, et. 3, ap. 16\n300732 Timisoara\nsupport@gitdigest.ai",
  companyCountry: "RO",
  customerName: "Acme Inc.",
  customerAddress: "123 Main St\nManhattan, NY 10001\njdoe@acme.com",
  customerCountry: "US",
  customerVat: "",
  items: [
    { id: "1", description: "Lifetime access to Git Digest", quantity: 1, unitPrice: 500.00 },
  ],
  isReverseCharge: true,
  notes: "",
};

export default function Home() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const countryList = useMemo(() => getCountryList(), []);

  const isEUCustomer = useMemo(() => {
    if (!invoiceData?.customerCountry) return false;
    return EU_COUNTRY_CODES.includes(invoiceData.customerCountry);
  }, [invoiceData?.customerCountry]);

  const isEUCompany = useMemo(() => {
    if (!invoiceData?.companyCountry) return false;
    return EU_COUNTRY_CODES.includes(invoiceData.companyCountry);
  }, [invoiceData?.companyCountry]);

  const shouldApplyVAT = useMemo(() => {
    if (!invoiceData) return false;
    
    // B2C: EU company selling to EU customer - always apply VAT of the company's country
    if (isEUCompany && isEUCustomer && !invoiceData.customerVat) {
      return true;
    }
    
    // B2B: EU company selling to EU business with VAT number - reverse charge
    if (isEUCompany && isEUCustomer && invoiceData.customerVat && invoiceData.customerCountry !== invoiceData.companyCountry) {
      return false; // Reverse charge applies
    }
    
    // B2B: Same country - always apply VAT
    if (isEUCompany && isEUCustomer && invoiceData.customerCountry === invoiceData.companyCountry) {
      return true;
    }
    
    // Non-EU sales - no VAT
    return false;
  }, [invoiceData, isEUCompany, isEUCustomer]);

  const getApplicableVATRate = useMemo(() => {
    if (!invoiceData || !shouldApplyVAT) return 0;
    
    // Use company's country VAT rate
    if (isEUCompany && EU_VAT_RATES[invoiceData.companyCountry]) {
      return EU_VAT_RATES[invoiceData.companyCountry].standard;
    }
    
    return 0;
  }, [invoiceData, isEUCompany, shouldApplyVAT]);

  // Load data from localStorage on client-side mount
  useEffect(() => {
    const saved = localStorage.getItem('invoiceData');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.items) {
          setInvoiceData(parsed);
          return;
        }
      } catch (e) {
        console.error('Failed to load saved invoice data:', e);
      }
    }
    setInvoiceData(defaultInvoiceData);
  }, []);

  const handleInputChange = (field: keyof InvoiceData, value: string | boolean) => {
    if (!invoiceData) return;
    
    // Handle reverse charge logic for notes
    if (field === 'isReverseCharge') {
      const newNotes = value 
        ? "Tax to be paid on a reverse-charge basis"
        : "";
      setInvoiceData(prev => prev ? ({ 
        ...prev, 
        [field]: value as boolean,
        notes: newNotes
      }) : null);
    } else if (field === 'customerCountry' || field === 'companyCountry' || field === 'customerVat') {
      // Update reverse charge status based on new country/VAT selection
      const updates: Partial<InvoiceData> = { [field]: value };
      const newData = { ...invoiceData, ...updates };
      
      // Check if reverse charge should apply
      const isEUCompanyCheck = EU_COUNTRY_CODES.includes(field === 'companyCountry' ? value as string : newData.companyCountry);
      const isEUCustomerCheck = EU_COUNTRY_CODES.includes(field === 'customerCountry' ? value as string : newData.customerCountry);
      const hasVat = field === 'customerVat' ? !!value : !!newData.customerVat;
      const differentCountries = newData.companyCountry !== newData.customerCountry;
      
      // B2B cross-border EU transaction with VAT number = reverse charge
      const shouldReverseCharge = isEUCompanyCheck && isEUCustomerCheck && hasVat && differentCountries;
      
      updates.isReverseCharge = shouldReverseCharge;
      if (shouldReverseCharge) {
        updates.notes = "Tax to be paid on a reverse-charge basis";
      } else if (invoiceData.notes === "Tax to be paid on a reverse-charge basis") {
        updates.notes = "";
      }
      
      setInvoiceData(prev => prev ? ({ ...prev, ...updates }) : null);
    } else {
      setInvoiceData(prev => prev ? ({ ...prev, [field]: value }) : null);
    }
  };

  const handleItemChange = (itemId: string, field: keyof InvoiceItem, value: string | number) => {
    if (!invoiceData) return;
    setInvoiceData(prev => prev ? ({
      ...prev,
      items: prev.items.map(item =>
        item.id === itemId ? { ...item, [field]: value } : item
      )
    }) : null);
  };

  const addItem = () => {
    if (!invoiceData) return;
    setInvoiceData(prev => prev ? ({
      ...prev,
      items: [...prev.items, { id: Date.now().toString(), description: "", quantity: 1, unitPrice: 0 }]
    }) : null);
  }

  const removeItem = (itemId: string) => {
    if (!invoiceData) return;
    setInvoiceData(prev => prev ? ({
      ...prev,
      items: prev.items.filter(item => item.id !== itemId)
    }) : null);
  }

  // Save to localStorage whenever invoiceData changes
  useEffect(() => {
    if (invoiceData) {
      localStorage.setItem('invoiceData', JSON.stringify(invoiceData));
    }
  }, [invoiceData]);

  const { subtotal, taxAmount, total, taxRate } = useMemo(() => {
    if (!invoiceData) return { subtotal: 0, taxAmount: 0, total: 0, taxRate: 0 };
    const subtotal = invoiceData.items.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);
    
    const taxRate = shouldApplyVAT ? getApplicableVATRate : 0;
    const taxAmount = subtotal * (taxRate / 100);
    const total = subtotal + taxAmount;
    return { subtotal, taxAmount, total, taxRate };
  }, [invoiceData, shouldApplyVAT, getApplicableVATRate]);


  const handlePrint = () => window.print();

  if (!invoiceData) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }
  
  const isCustomLogo = ![
    "/git-digest-logo.png",
    "/default-logo.svg",
    ""
  ].includes(invoiceData.companyLogoUrl);

  return (
    <>
      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; }
          .invoice-container {
             box-shadow: none !important;
             margin: 0 !important;
             max-width: 100% !important;
             border: none !important;
          }
          .print-no-placeholder:placeholder-shown {
            color: transparent !important;
          }
          .print-no-placeholder::placeholder {
            color: transparent !important;
          }
          input, textarea {
            border: none !important;
            background: transparent !important;
          }
          input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
            color: transparent !important;
          }
        }
        .editable-textarea {
          white-space: pre-wrap;
          resize: none;
        }
      `}</style>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* --- CONTROLS --- */}
          <div className="no-print mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
             <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Invoice Generator</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Company Logo</label>
                <select
                  value={isCustomLogo ? "custom" : invoiceData.companyLogoUrl}
                  onChange={(e) => {
                    if (e.target.value === "custom") {
                      handleInputChange("companyLogoUrl", "https://");
                    } else {
                      handleInputChange("companyLogoUrl", e.target.value);
                    }
                  }}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                >
                  <option value="/git-digest-logo.png">Git Digest</option>
                  <option value="/default-logo.svg">Sunergos (Default)</option>
                  <option value="">None</option>
                  <option value="custom">Custom URL</option>
                </select>
                {isCustomLogo && (
                  <input
                    type="url"
                    value={invoiceData.companyLogoUrl}
                    onChange={(e) => handleInputChange("companyLogoUrl", e.target.value)}
                    className="w-full px-3 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    placeholder="Enter custom logo URL"
                  />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Company Country</label>
                <select
                  value={invoiceData.companyCountry || ""}
                  onChange={(e) => handleInputChange("companyCountry", e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                >
                  <option value="">Select country</option>
                  {countryList.map(country => (
                    <option key={country.code} value={country.code}>{country.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Customer Country</label>
                <select
                  value={invoiceData.customerCountry || ""}
                  onChange={(e) => handleInputChange("customerCountry", e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                >
                  <option value="">Select country</option>
                  {countryList.map(country => (
                    <option key={country.code} value={country.code}>{country.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={invoiceData.isReverseCharge}
                    onChange={(e) => handleInputChange("isReverseCharge", e.target.checked)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
                    disabled={!isEUCompany || !isEUCustomer || !invoiceData.customerVat || invoiceData.companyCountry === invoiceData.customerCountry}
                  />
                  Reverse-Charge VAT
                  {isEUCompany && isEUCustomer && invoiceData.customerVat && invoiceData.companyCountry !== invoiceData.customerCountry && (
                    <span className="ml-1 text-xs text-gray-500">(Auto-applied for B2B cross-border EU)</span>
                  )}
                </label>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={handlePrint}
                className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-sm"
              >
                Print / Export as PDF
              </button>
            </div>
          </div>

          {/* --- INVOICE --- */}
          <div className="invoice-container bg-white p-12 shadow-lg rounded-lg border border-gray-200">
            <header className="flex justify-between items-start mb-12">
              <div className="w-1/2">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Invoice</h1>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm max-w-xs">
                  <strong className="text-gray-600">Invoice number</strong>
                  <EditableField value={invoiceData.invoiceNumber} onChange={(v) => handleInputChange('invoiceNumber', v)} placeholder="INV-0001" />

                  <strong className="text-gray-600">Date of issue</strong>
                  <input type="date" value={invoiceData.issueDate} onChange={(e) => handleInputChange("issueDate", e.target.value)} className="bg-transparent text-gray-800 text-left focus:bg-gray-100 p-1 -m-1 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-400 hover:bg-gray-50 transition-colors print-no-placeholder" />
                  
                  <strong className="text-gray-600">Date due</strong>
                  <input type="date" value={invoiceData.dueDate} onChange={(e) => handleInputChange("dueDate", e.target.value)} className="bg-transparent text-gray-800 text-left focus:bg-gray-100 p-1 -m-1 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-400 hover:bg-gray-50 transition-colors print-no-placeholder" />
                </div>
              </div>
              <div className="w-1/2 flex justify-end">
                {invoiceData.companyLogoUrl && isValidImageUrl(invoiceData.companyLogoUrl) && (
                  <Image src={invoiceData.companyLogoUrl} alt="Company Logo" width={200} height={50} style={{ maxHeight: '50px', width: 'auto' }} />
                )}
              </div>
            </header>
            
            <section className="flex justify-between mb-12">
               <div className="w-1/2 pr-8">
                 <EditableField value={invoiceData.companyName} onChange={(v) => handleInputChange('companyName', v)} placeholder="Your Company Name" className="font-bold" />
                 <EditableField value={invoiceData.companyAddress} onChange={(v) => handleInputChange('companyAddress', v)} placeholder="123 Business St\nSuite 100\nCity, State 12345\nCountry\nemail@company.com" isTextarea rows={5} className="text-sm mt-2 editable-textarea" />
              </div>
              <div className="w-1/2 pl-8">
                <h2 className="text-sm font-semibold text-gray-500 mb-2">Bill to</h2>
                <EditableField value={invoiceData.customerName} onChange={(v) => handleInputChange('customerName', v)} placeholder="Client Company Name" className="font-bold" />
                <EditableField value={invoiceData.customerAddress} onChange={(v) => handleInputChange('customerAddress', v)} placeholder="456 Client Ave\nFloor 5\nCity, State 67890\nCountry\nclient@email.com" isTextarea rows={5} className="text-sm mt-2 editable-textarea" />
                {isEUCustomer && (
                  <EditableField value={invoiceData.customerVat} onChange={(v) => handleInputChange('customerVat', v)} placeholder="VAT Number (e.g., DE123456789)" className="text-sm mt-2" />
                )}
              </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">US${total.toFixed(2)} due {new Date(invoiceData.dueDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric"})}</h2>
            </section>

            {/* --- ITEMS TABLE --- */}
            <section>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-400 text-sm text-gray-600">
                    <th className="p-2 pb-3 font-semibold w-1/2">Description</th>
                    <th className="p-2 pb-3 font-semibold text-right">Qty</th>
                    <th className="p-2 pb-3 font-semibold text-right">Unit price</th>
                    <th className="p-2 pb-3 font-semibold text-right">Tax</th>
                    <th className="p-2 pb-3 font-semibold text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceData.items.map((item, index) => {
                    const itemTotal = item.quantity * item.unitPrice;
                    return (
                      <tr key={item.id} className="border-b border-gray-200">
                        <td className="p-2 align-top">
                          <EditableField value={item.description} onChange={(v) => handleItemChange(item.id, 'description', v)} placeholder="Product or service description\nAdd details here..." isTextarea className="text-sm editable-textarea" />
                        </td>
                        <td className="p-2 align-top text-right">
                          <input type="number" value={item.quantity} onChange={(e) => handleItemChange(item.id, 'quantity', parseFloat(e.target.value) || 0)} placeholder="1" className="w-16 text-right bg-transparent text-gray-800 focus:bg-gray-100 p-1 -m-1 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 hover:bg-gray-50 transition-colors print-no-placeholder" />
                        </td>
                        <td className="p-2 align-top text-right">
                          <input type="number" value={item.unitPrice} onChange={(e) => handleItemChange(item.id, 'unitPrice', parseFloat(e.target.value) || 0)} placeholder="0.00" step="0.01" className="w-24 text-right bg-transparent text-gray-800 focus:bg-gray-100 p-1 -m-1 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 hover:bg-gray-50 transition-colors print-no-placeholder" />
                        </td>
                        <td className="p-2 align-top text-right text-sm text-gray-600">
                           {shouldApplyVAT ? (
                             `${taxRate}%`
                           ) : (
                             isEUCustomer && invoiceData.isReverseCharge ? (
                               <>0%<sup>[1]</sup></>
                             ) : (
                               '0%'
                             )
                           )}
                        </td>
                        <td className="p-2 align-top text-right text-sm text-gray-800">US${itemTotal.toFixed(2)}</td>
                        <td className="p-2 align-top text-right no-print">
                            {index > 0 && (
                              <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700">&times;</button>
                            )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <div className="no-print mt-4">
                  <button onClick={addItem} className="text-blue-600 hover:text-blue-800 font-semibold text-sm">+ Add item</button>
              </div>
            </section>

            {/* --- TOTALS --- */}
            <section className="flex justify-end mt-8">
              <div className="w-1/2 max-w-xs text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">US${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Tax ({taxRate}%)</span>
                  <span className="text-gray-800">US${taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Total</span>
                   <span className="text-gray-800">US${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-3 font-bold text-base">
                  <span className="text-gray-600">Amount due</span>
                  <span className="text-gray-800">US${total.toFixed(2)}</span>
                </div>
              </div>
            </section>

            {/* --- NOTES --- */}
            <section className="mt-12">
                <EditableField value={invoiceData.notes} onChange={(v) => handleInputChange('notes', v)} placeholder="Additional notes, payment terms, or special instructions..." isTextarea className="text-sm editable-textarea" />
            </section>

          </div>
        </div>
      </div>
    </>
  );
}