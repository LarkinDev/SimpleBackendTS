import { Injectable,Inject, forwardRef  } from "@nestjs/common";
import { CartItems } from "src/cart/model/cart-item.entity";
import { StoreItems } from "src/store/model/store-item.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class CheckoutService {
    constructor(
        //@Inject(forwardRef(() => StoreService))
        
        //@Inject(forwardRef(() => StoreService))
        @InjectRepository(StoreItems) 
        private readonly storeItemRepository: Repository<StoreItems>,
        @InjectRepository(CartItems) 
        private readonly cartItemRepository: Repository<CartItems>
        ){}
        async checkout():Promise<number> {
            let cartItems: CartItems[] = await this.cartItemRepository.find();
            let sum:number = 0;
            for (let i = 0; i < cartItems.length; i++) {
                let id = cartItems[i].itemId;
                let item = await this.storeItemRepository.findOneBy({id});
                sum+=item.price*cartItems[i].quantity;
              }
            return sum;
        }
        
    
}