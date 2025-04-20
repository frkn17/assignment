export interface ProductImageSet {
    yellow: string;
    rose: string;
    white: string;
}

export interface Product {
    name: string;
    weight: number;
    popularityScore: number;
    price: number;
    popularityOutOfFive: number;
    images: ProductImageSet;
}