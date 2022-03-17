
export interface StoreTypes {
    categoria: string,
    produtos: Array<Produto>
}

export interface Produto{
    name: string,
    imgSrc: string,
    imgSrcPage: string,
    title: string,
    about: string,
    aboutPage: string,
    price: string,
    inlineStyle: string      
}


