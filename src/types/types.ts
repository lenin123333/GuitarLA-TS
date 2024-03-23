//La D es de tipados definidos y automaticamente los leen 
//TypeScript no los recomienda

export type Guitar ={
    id:number
    name:string
    image:string
    description:string,
    price:number
}

export type CartItem = Guitar &{
    quantity:number
}




