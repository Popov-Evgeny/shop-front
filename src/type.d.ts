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

export interface LoginUserData {
    email: string,
    password: string,
}

export interface ApiUser {
    email: string,
    password: string,
    name: string,
    phone: string
}

export interface User {
    email: string,
    password: string,
    name: string,
    phone: string,
    token: string,
}