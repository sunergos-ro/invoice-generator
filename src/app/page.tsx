"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface InvoiceData {
  // Invoice details
  receiptNumber: string;
  issueDate: string;
  paidDate: string;
  
  // Company details
  companyLogoUrl: string;
  companyName: string;
  companyAddress: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    registrationNumber: string;
  };
  
  // Customer details
  customerName: string;
  customerEmail: string;
  customerAddress: {
    line1: string;
    line2: string;
    postalCode: string;
    state: string;
    city: string;
    country: string;
  };
  
  // Custom field
  customFieldName: string;
  customFieldValue: string;
  
  // Payment details
  amountPaid: number;
  paymentBrand: string;
  paymentLast4: string;
  
  // Invoice item
  itemDescription: string;
  
  // Contact
  contactEmail: string;
}

export default function Home() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(() => {
    // Load from localStorage on mount
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('invoiceData');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to load saved invoice data:', e);
        }
      }
    }
    
    // Default values if no saved data
    return {
      receiptNumber: "",
      issueDate: new Date().toISOString().split("T")[0],
      paidDate: new Date().toISOString().split("T")[0],
      companyLogoUrl: "/default-logo.svg",
      companyName: "Sunergos IT LLC",
      companyAddress: {
        street: "Martir Marius Ciopec 18C, apt. 16",
        city: "Timisoara, Timis",
        postalCode: "300737",
        registrationNumber: "RO38045891",
      },
      customerName: "",
      customerEmail: "",
      customerAddress: {
        line1: "",
        line2: "",
        postalCode: "",
        state: "",
        city: "",
        country: "",
      },
      customFieldName: "",
      customFieldValue: "",
      amountPaid: 0,
      paymentBrand: "",
      paymentLast4: "",
      itemDescription: "",
      contactEmail: "",
    };
  });

  const handleInputChange = (field: string, value: string | number) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setInvoiceData({
        ...invoiceData,
        [parent]: {
          ...(invoiceData[parent as keyof InvoiceData] as Record<string, string | number>),
          [child]: value,
        },
      });
    } else {
      setInvoiceData({ ...invoiceData, [field]: value });
    }
  };

  const handlePrint = () => window.print();

  // Save to localStorage whenever invoiceData changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('invoiceData', JSON.stringify(invoiceData));
    }
  }, [invoiceData]);

  useEffect(() => {
    handleInputChange("paidDate", invoiceData.issueDate);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoiceData.issueDate]);

  return (
    <>
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          .print-only {
            display: block !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: white !important;
            z-index: 9999 !important;
            margin: 0 !important;
            padding: 14px !important;
          }
          .invoice-content {
            max-width: none !important;
            box-shadow: none !important;
            border: none !important;
            transform: none !important;
            margin: 0 !important;
          }
          body {
            background: #fff !important;
          }
        }
        @media screen {
          .print-only {
            display: none;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 py-4 sm:py-8 no-print">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center">Invoice Generator</h1>
          
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {/* Form Section */}
            <div className="w-full lg:flex-1 bg-white rounded-lg shadow-md p-4 sm:p-6 lg:max-h-[calc(100vh-200px)] overflow-y-auto">
              <form className="space-y-6">
                {/* Invoice Details */}
                <div className="border-b pb-4">
                  <h2 className="text-lg font-semibold mb-3">Invoice Details</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Receipt Number</label>
                      <input
                        type="text"
                        value={invoiceData.receiptNumber}
                        onChange={(e) => handleInputChange("receiptNumber", e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="INV-001"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Issue Date</label>
                        <input
                          type="date"
                          value={invoiceData.issueDate}
                          onChange={(e) => handleInputChange("issueDate", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Paid Date</label>
                        <input
                          type="date"
                          value={invoiceData.paidDate}
                          onChange={(e) => handleInputChange("paidDate", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <div className="border-b pb-4">
                  <h2 className="text-lg font-semibold mb-3">Company Details</h2>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Company Logo</label>
                        <select
                          value={invoiceData.companyLogoUrl === "/default-logo.svg" || invoiceData.companyLogoUrl === "/git-digest-logo.png" ? invoiceData.companyLogoUrl : "custom"}
                          onChange={(e) => {
                            if (e.target.value === "custom") {
                              handleInputChange("companyLogoUrl", "");
                            } else {
                              handleInputChange("companyLogoUrl", e.target.value);
                            }
                          }}
                          className="w-full px-3 py-2 border rounded-md"
                        >
                          <option value="/default-logo.svg">Sunergos (Default)</option>
                          <option value="/git-digest-logo.png">Git Digest</option>
                          <option value="custom">Custom URL</option>
                        </select>
                        {(invoiceData.companyLogoUrl !== "/default-logo.svg" && invoiceData.companyLogoUrl !== "/git-digest-logo.png") && (
                          <input
                            type="url"
                            value={invoiceData.companyLogoUrl}
                            onChange={(e) => handleInputChange("companyLogoUrl", e.target.value)}
                            className="w-full px-3 py-2 border rounded-md mt-2"
                            placeholder="Enter custom logo URL"
                          />
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Company Name</label>
                        <input
                          type="text"
                          value={invoiceData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="Sunergos IT LLC"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Company Address</label>
                        <input
                          type="text"
                          value={invoiceData.companyAddress.street}
                          onChange={(e) => handleInputChange("companyAddress.street", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="123 Main St"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">City</label>
                        <input
                          type="text"
                          value={invoiceData.companyAddress.city}
                          onChange={(e) => handleInputChange("companyAddress.city", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Postal Code</label>
                        <input
                          type="text"
                          value={invoiceData.companyAddress.postalCode}
                          onChange={(e) => handleInputChange("companyAddress.postalCode", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="10001"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Country</label>
                        <input
                          type="text"
                          value={invoiceData.companyAddress.country}
                          onChange={(e) => handleInputChange("companyAddress.country", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Details */}
                <div className="border-b pb-4">
                  <h2 className="text-lg font-semibold mb-3">Customer Details</h2>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Customer Name</label>
                        <input
                          type="text"
                          value={invoiceData.customerName}
                          onChange={(e) => handleInputChange("customerName", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Customer Email</label>
                        <input
                          type="email"
                          value={invoiceData.customerEmail}
                          onChange={(e) => handleInputChange("customerEmail", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Address Line 1</label>
                        <input
                          type="text"
                          value={invoiceData.customerAddress.line1}
                          onChange={(e) => handleInputChange("customerAddress.line1", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Address Line 2</label>
                        <input
                          type="text"
                          value={invoiceData.customerAddress.line2}
                          onChange={(e) => handleInputChange("customerAddress.line2", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">City</label>
                        <input
                          type="text"
                          value={invoiceData.customerAddress.city}
                          onChange={(e) => handleInputChange("customerAddress.city", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">State</label>
                        <input
                          type="text"
                          value={invoiceData.customerAddress.state}
                          onChange={(e) => handleInputChange("customerAddress.state", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Postal Code</label>
                        <input
                          type="text"
                          value={invoiceData.customerAddress.postalCode}
                          onChange={(e) => handleInputChange("customerAddress.postalCode", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Country</label>
                        <input
                          type="text"
                          value={invoiceData.customerAddress.country}
                          onChange={(e) => handleInputChange("customerAddress.country", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="border-b pb-4">
                  <h2 className="text-lg font-semibold mb-3">Payment Details</h2>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Amount Paid (USD)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={invoiceData.amountPaid}
                        onChange={(e) => handleInputChange("amountPaid", parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Payment Brand</label>
                        <input
                          type="text"
                          value={invoiceData.paymentBrand}
                          onChange={(e) => handleInputChange("paymentBrand", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="Visa"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last 4 Digits</label>
                        <input
                          type="text"
                          maxLength={4}
                          value={invoiceData.paymentLast4}
                          onChange={(e) => handleInputChange("paymentLast4", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="1234"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Invoice Item */}
                <div className="border-b pb-4">
                  <h2 className="text-lg font-semibold mb-3">Invoice Item</h2>
                  <div>
                    <label className="block text-sm font-medium mb-1">Item Description</label>
                    <textarea
                      value={invoiceData.itemDescription}
                      onChange={(e) => handleInputChange("itemDescription", e.target.value)}
                      className="w-full px-3 py-2 border rounded-md"
                      rows={3}
                      placeholder="Service or product description"
                    />
                  </div>
                </div>

                {/* Additional Fields */}
                <div className="pb-4">
                  <h2 className="text-lg font-semibold mb-3">Additional Information</h2>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Custom Field Name</label>
                        <input
                          type="text"
                          value={invoiceData.customFieldName}
                          onChange={(e) => handleInputChange("customFieldName", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="VAT Number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Custom Field Value</label>
                        <input
                          type="text"
                          value={invoiceData.customFieldValue}
                          onChange={(e) => handleInputChange("customFieldValue", e.target.value)}
                          className="w-full px-3 py-2 border rounded-md"
                          placeholder="GB123456789"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Contact Email</label>
                      <input
                        type="email"
                        value={invoiceData.contactEmail}
                        onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="support@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Print / Export as PDF
                  </button>
                </div>
              </form>
            </div>

            {/* Preview Section - Hidden on mobile */}
            <div className="hidden lg:block lg:flex-1 bg-gray-100 rounded-lg shadow-md p-4 overflow-hidden">
              <h2 className="text-lg font-semibold mb-3 text-center">Invoice Preview</h2>
              <div className="bg-gray-600 p-4 overflow-auto max-h-[calc(100vh-280px)]">
                <div className="invoice-content max-w-[600px] mx-auto bg-white p-10 shadow-lg transform scale-75 origin-top">
                  <InvoicePreview data={invoiceData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Version */}
      <div className="print-only">
        <div className="invoice-content bg-white p-14">
          <InvoicePreview data={invoiceData} />
        </div>
      </div>
    </>
  );
}

function InvoicePreview({ data }: { data: InvoiceData }) {
  return (
    <>
      <div className="relative">
        <div className="absolute right-0 top-0 text-right">
          <h1 className="text-2xl font-semibold mb-4">Invoice</h1>
          <p className="space-y-1 text-sm">
            <span className="block">
              <strong>Invoice number</strong>&nbsp;&nbsp;&nbsp;#{data.receiptNumber || "INV-001"}
            </span>
            <span className="block">
              <strong>Date of issue</strong>&nbsp;&nbsp;&nbsp;&nbsp;{data.issueDate}
            </span>
            <span className="block">
              <strong>Date paid</strong>&nbsp;&nbsp;&nbsp;&nbsp;{data.paidDate}
            </span>
            {data.customFieldName && (
              <span className="block">
                <strong>{data.customFieldName}</strong> {data.customFieldValue}
              </span>
            )}
          </p>
        </div>

        {data.companyLogoUrl && (
          <div className="mb-8">
            <Image
              src={data.companyLogoUrl}
              alt={data.companyName}
              width={200}
              height={50}
              className="mb-4"
              style={{ 
                maxHeight: "50px",
                width: "auto"
              }}
            />
          </div>
        )}
        <div className="mb-6">
          <p className="whitespace-pre-line text-sm">
            {data.companyName}
            {"\n"}
            VAT ID: {data.companyAddress.registrationNumber}
            {"\n"}
            {data.companyAddress.street}
            {"\n"}
            {data.companyAddress.postalCode} {data.companyAddress.city}
            {"\n"}
            {data.companyAddress.country}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-sm">
            <strong>Bill to</strong>
            {data.customerName && (
              <>
                <br />
                {data.customerName}
              </>
            )}
            {data.customerEmail && (
              <>
                <br />
                {data.customerEmail}
              </>
            )}
            {data.customerAddress.line1 && (
              <>
                <br />
                {data.customerAddress.line1}
              </>
            )}
            {data.customerAddress.line2 && (
              <>
                <br />
                {data.customerAddress.line2}
              </>
            )}
            {data.customerAddress.postalCode && (
              <>
                <br />
                {data.customerAddress.postalCode}
              </>
            )}
            {data.customerAddress.state && (
              <>
                <br />
                {data.customerAddress.state}
              </>
            )}
            {data.customerAddress.city && (
              <>
                <br />
                {data.customerAddress.city}
              </>
            )}
            {data.customerAddress.country && (
              <>
                <br />
                {data.customerAddress.country}
              </>
            )}
          </p>
        </div>

        <h1 className="text-xl font-semibold mb-3">
          US${data.amountPaid.toFixed(2)} paid {data.paidDate ? new Date(data.paidDate).toLocaleDateString("en-US", { 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
          }) : ""}
        </h1>

        {data.paymentLast4 && (
          <p className="mb-6 text-sm">
            Paid with {data.paymentBrand} *{data.paymentLast4}
          </p>
        )}

        <table className="w-full border-collapse mb-8 text-sm">
          <thead>
            <tr>
              <th className="border-b border-black p-2 text-left">Description</th>
              <th className="border-b border-black p-2 text-left">Qty</th>
              <th className="border-b border-black p-2 text-left">Unit price</th>
              <th className="border-b border-black p-2 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 border-b border-black">
              <td className="p-2">{data.itemDescription}</td>
              <td className="p-2">1</td>
              <td className="p-2">${data.amountPaid.toFixed(2)}</td>
              <td className="p-2">${data.amountPaid.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2">Subtotal</td>
              <td className="p-2">${data.amountPaid.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2 bg-gray-100 border-t border-b border-black font-semibold">
                Amount paid
              </td>
              <td className="p-2 bg-gray-100 border-t border-b border-black font-semibold">
                ${data.amountPaid.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-12">
          <p className="text-sm">Questions? Contact us at {data.contactEmail}</p>
        </div>
      </div>
    </>
  );
}