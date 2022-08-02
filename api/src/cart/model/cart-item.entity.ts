import { Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class CartItems {
    @PrimaryColumn()
    itemId:number

    @Column()
    quantity?:number
}