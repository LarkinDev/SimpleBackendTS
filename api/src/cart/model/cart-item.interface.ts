import { StoreItems } from "src/store/model/store-item.entity"

export interface ICartItem{
    itemId:number
    quantity:number
    storeItem?:StoreItems
}