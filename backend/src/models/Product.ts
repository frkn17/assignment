export interface ProductImageSet {
    yellow: string;
    rose: string;
    white: string;
}

export interface ProductRaw {
    name: string;
    popularityScore: number;
    weight: number;
    images: ProductImageSet;
}

export interface ProductResponse extends ProductRaw {
    price: number;
    popularityOutOfFive: number;
}