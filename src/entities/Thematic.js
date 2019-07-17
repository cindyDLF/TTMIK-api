import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany
} from "typeorm";
import { Exercice } from "./Exercice";

@Entity("Thematic")
export class Thematic extends BaseEntity {
  @PrimaryGeneratedColumn() id;

  @Column("varchar") name;

  @OneToMany(type => Exercice, exercice => exercice.thematic)
  exercice;
}
