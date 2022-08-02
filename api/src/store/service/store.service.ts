import { Injectable,Inject, forwardRef  } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CartItems } from "src/cart/model/cart-item.entity";
import { Repository } from "typeorm";
import { StoreItems } from "../model/store-item.entity";
import { IStoreItem } from "../model/store-item.interface";

@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(StoreItems) private readonly storeItemRepository: Repository<StoreItems>,
        @InjectRepository(CartItems) private readonly cartItemRepository: Repository<CartItems>,
        ){}
    
    findAll(): Promise<StoreItems[]> {
        return this.storeItemRepository.find();
    }
    public findOne(id: number): Promise<StoreItems> {
        return this.storeItemRepository.findOneBy({id})
    }
    create(cartItem:IStoreItem): Promise<IStoreItem> {
        return this.storeItemRepository.save(cartItem);
    }
    delete(id:number):Promise<any> {
        this.cartItemRepository.delete(id)
        return this.storeItemRepository.delete(id);
    }
    update(id:number, cartItem:IStoreItem):Promise<IStoreItem>{
        this.storeItemRepository.update(id, cartItem);
        return this.storeItemRepository.findOneBy({id})
    }
    
}