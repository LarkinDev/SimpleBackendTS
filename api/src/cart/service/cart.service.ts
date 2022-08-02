import { Injectable,Inject, forwardRef } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StoreService } from "src/store/service/store.service";
import { Repository } from "typeorm";
import { CartItems } from "../model/cart-item.entity";
import { ICartItem } from "../model/cart-item.interface";

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(CartItems) private readonly cartItemRepository: Repository<CartItems>,
        ){}
    
    findAll(): Promise<CartItems[]> {
        return this.cartItemRepository.find();
    }
    findOne(itemId: number): Promise<CartItems> {
        return this.cartItemRepository.findOneBy({itemId})
    }
    create(cartItem:ICartItem): Promise<ICartItem> {
        return this.cartItemRepository.save(cartItem);
    }
    delete(id:number):Promise<any> {
        return this.cartItemRepository.delete(id);
    }
    update(itemId:number, cartItem:ICartItem):Promise<CartItems>{
        this.cartItemRepository.update(itemId, cartItem);
        return this.cartItemRepository.findOneBy({itemId})
    }
}