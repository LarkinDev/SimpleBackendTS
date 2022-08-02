import { Controller, Post, Body, Request, Get, Query, Param, Delete, Put, Logger, } from '@nestjs/common';
import { CheckoutService } from '../service/checkout.service';

@Controller('checkout')
export class CheckoutController {
    constructor(private checkService: CheckoutService){}

    @Get()
    async checkout():Promise<number> {
        return this.checkService.checkout();
    }
} 