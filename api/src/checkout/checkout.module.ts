import { Module, forwardRef } from "@nestjs/common";
import { CheckoutService } from "./service/checkout.service";
import { CheckoutController } from "./controller/checkout.contrller";
import { CartItems } from "src/cart/model/cart-item.entity";
import { StoreItems } from "src/store/model/store-item.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module(
    {
        imports: [
            TypeOrmModule.forFeature([
                StoreItems,
                CartItems
              ]),  
        ],
        providers: [CheckoutService],
        controllers: [CheckoutController]
    }
)
export class CheckoutModule {}