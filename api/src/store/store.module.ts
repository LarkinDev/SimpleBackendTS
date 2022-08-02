import { Module, forwardRef } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm';
import { StoreItems } from "./model/store-item.entity";
import { StoreController } from "./controller/store.contrller";
import { StoreService } from "./service/store.service";
import { CartItems } from "src/cart/model/cart-item.entity";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature([
                StoreItems, 
                CartItems
            ]),
        ],
        controllers: [StoreController],
        providers: [StoreService]
    }
)
export class StoreModule {}