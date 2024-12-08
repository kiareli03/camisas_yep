export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    colors: string[];
    sizes: string[];
    selectedColor?: string;
    selectedSize?: string;
  }
