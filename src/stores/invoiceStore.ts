import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BusinessEntity {
  id: string;
  name: string;
  logoUrl: string;
  address: string;
  country: string;
}

interface ClientEntity {
  id: string;
  name: string;
  address: string;
  country: string;
  vat: string;
}

interface InvoiceStore {
  // Saved entities
  businesses: BusinessEntity[];
  clients: ClientEntity[];
  
  // Actions for businesses
  addBusiness: (business: BusinessEntity) => void;
  updateBusiness: (id: string, business: Partial<BusinessEntity>) => void;
  deleteBusiness: (id: string) => void;
  
  // Actions for clients
  addClient: (client: ClientEntity) => void;
  updateClient: (id: string, client: Partial<ClientEntity>) => void;
  deleteClient: (id: string) => void;
}

export const useInvoiceStore = create<InvoiceStore>()(
  persist(
    (set) => ({
      businesses: [],
      clients: [],
      
      addBusiness: (business) => set((state) => ({
        businesses: [...state.businesses, business]
      })),
      
      updateBusiness: (id, business) => set((state) => ({
        businesses: state.businesses.map(b => 
          b.id === id ? { ...b, ...business } : b
        )
      })),
      
      deleteBusiness: (id) => set((state) => ({
        businesses: state.businesses.filter(b => b.id !== id)
      })),
      
      addClient: (client) => set((state) => ({
        clients: [...state.clients, client]
      })),
      
      updateClient: (id, client) => set((state) => ({
        clients: state.clients.map(c => 
          c.id === id ? { ...c, ...client } : c
        )
      })),
      
      deleteClient: (id) => set((state) => ({
        clients: state.clients.filter(c => c.id !== id)
      })),
    }),
    {
      name: 'invoice-storage',
    }
  )
);

export type { BusinessEntity, ClientEntity };