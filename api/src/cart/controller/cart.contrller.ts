import { Controller, Post, Body, Request, Get, Query, Param, Delete, Put, Patch, Logger, } from '@nestjs/common';
import { CartItems } from '../model/cart-item.entity';
import { CartService } from '../service/cart.service';
import { ICartItem } from '../model/cart-item.interface';

@Controller('cart-items')
export class CartController {
    constructor(private cartService: CartService){}

    @Get()
    async findAll():Promise<CartItems []> {
        return this.cartService.findAll();
    }
    @Post()
    async create(@Body()cartItem:ICartItem):Promise<ICartItem> {
        return this.cartService.create(cartItem)
    }
    @Delete(':id')
    async delete(@Param('id') id:number):Promise<any> {
        return this.cartService.delete(id);
    }
    @Put(':id')
    async update(@Param('id') id:number, @Body() cartItem:ICartItem)
    {
        return this.cartService.update(id, cartItem);
    }
    @Post('/checkout')
    async checkout()
    {
        return this.checkout();
    } 
} 