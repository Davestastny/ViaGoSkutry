export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  description: string | null;
  price: number;
  parameters: any;
  stock: number;
  category_id: number;
  created_at: string;
  updated_at: string;
}


