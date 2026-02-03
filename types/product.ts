export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    isFeatured?: boolean;
    cart: {
        items: []
    }
}