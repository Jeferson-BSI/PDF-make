import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('products')
class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Product };
