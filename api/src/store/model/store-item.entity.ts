import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class StoreItems {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    price:number

    @Column()
    picture:string
}