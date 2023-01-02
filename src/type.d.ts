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
    title: string,
    image: File,
}