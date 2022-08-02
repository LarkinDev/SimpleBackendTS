import { Module,forwardRef } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm';
import { CartItems } from "./model/cart-item.entity";
import { CartService } from "./service/cart.service";
import { CartController } from "./controller/cart.contrller";
import { StoreModule } from "src/store/store.module";


@Module(
    {
        imports: [
            TypeOrmModule.forFeature([CartItems]),
        ],
        controllers: [CartController],
        providers: [CartService]
    }
)
export class CartModule {}