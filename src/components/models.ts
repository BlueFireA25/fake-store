export interface EssentialLinkProps {
  title: string;
  link?: string;
  icon?: string;
}

export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
