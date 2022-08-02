import { CartItems } from "src/cart/model/cart-item.entity"
export interface IStoreItem{
    id?:number,
    name?:string
    price?:number
    picture?:string
    carttItem?:CartItems
}