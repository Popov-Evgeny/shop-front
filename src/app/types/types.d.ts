export interface Product {
    _id: string,
    category: string,
    title: string,
    price: number,
    description: string,
    image: File,
    user: string
}

export interface Categories {
    _id: string,
    title: string,
    image: File,
}

export interface SocialLinks {
    title: string,
    link: string,
}