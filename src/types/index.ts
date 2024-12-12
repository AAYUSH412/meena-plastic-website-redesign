export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface QuoteRequest {
  productId: number;
  productName: string;
  name: string;
  email: string;
  phone: string;
  quantity: string;
  message: string;
  createdAt: Date;
}