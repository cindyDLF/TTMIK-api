import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { Exercice } from "./Exercice";
import { User } from "./User";

@Entity("Progression")
export class Progression extends BaseEntity {
  @PrimaryGeneratedColumn() 
  id;

  @Column("integer") 
  score;

  @Column("varchar") 
  time;

  @ManyToOne(type => Exercice, exercice => exercice.progression)
  exercice;

  @ManyToOne(type => User, user => user.progression)
  user;
}
