export interface User{
    name: string,
    email: string,
    address: string,
    password: string,
    confirm: string
}

export interface Ad{
    id: string,
    title: string,
    category: string,
    description: string,
    price: number,
    image: string,
    date: string
}