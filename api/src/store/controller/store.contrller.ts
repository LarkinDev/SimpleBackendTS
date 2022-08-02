import { Controller, Post, Body, Request, Get, Query, Param, Delete, Put, Logger, } from '@nestjs/common';
import { IStoreItem } from '../model/store-item.interface';
import { StoreItems } from '../model/store-item.entity';
import { StoreService } from '../service/store.service';

@Controller('store-items')
export class StoreController {
    constructor(private storeService: StoreService){}

    @Get()
    async findAll():Promise<StoreItems []> {
        return this.storeService.findAll();
    }
    @Post()
    async create(@Body()storeItem:IStoreItem):Promise<IStoreItem> {
        Logger.debug(storeItem);
        return this.storeService.create(storeItem)
    }
    @Delete(':id')
    async delete(@Param('id') id:number):Promise<any> {
        Logger.debug(id);
        return this.storeService.delete(id);
    }
    @Put(':id')
    async update(@Param('id') id:number, @Body() storeItem:IStoreItem)
    {
        return this.storeService.update(id, storeItem);
    }
} 