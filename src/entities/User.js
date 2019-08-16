import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Index,
  OneToMany
} from "typeorm";

import { Progression } from "./Progression";

@Entity("User")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() 
  id;

  @Column("varchar") 
  username;

  @Column("varchar") 
  password;

  @Index({ unique: true }) @Column("varchar")
  email;

  @Column("varchar")
  avatar

  @Column("integer") 
  point;

  @Column("integer", { default: 1 })
  level;

  @Column("timestamp") 
  date_register;

  @OneToMany(type => Progression, progression => progression.user)
  progression;
}
