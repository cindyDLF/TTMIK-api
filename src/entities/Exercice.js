import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne
} from "typeorm";
import { Thematic } from "./Thematic";

@Entity("Exercice")
export class Exercice extends BaseEntity {
  @PrimaryGeneratedColumn() id;

  @Column("varchar") name;

  @Column("integer") complete_point;

  @Column("integer") step;

  @Column("integer") point_per_step;

  @Column("varchar") data;

  @ManyToOne(type => Thematic, thematic => thematic.exercice, { eager: true })
  thematic;
}
