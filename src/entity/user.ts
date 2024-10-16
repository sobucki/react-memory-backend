import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  userName: string;

  @Column()
  email: string;
}
