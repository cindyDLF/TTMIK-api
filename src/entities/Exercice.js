import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Thematic } from "./Thematic";
import { Progression } from "./Progression";

@Entity("Exercice")
export class Exercice extends BaseEntity {
  @PrimaryGeneratedColumn() id;

  @Column("varchar") name;

  @Column("integer") complete_point;

  @Column("integer") step;

  @Column("integer") point_per_step;

  @Column({ type: "jsonb", nullable: true })
  data;

  @ManyToOne(type => Thematic, thematic => thematic.exercice, { eager: true })
  thematic;

  @OneToMany(type => Progression, progression => progression.exercice)
  progression;
}
