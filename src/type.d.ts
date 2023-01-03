export interface Product {
    id: string,
    category: string,
    title: string,
    price: number,
    description: string,
    image: File,
    user: string
}

export interface Categories {
    id: string,
    title: string,
    image: File,
}