import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  BaseEntity,
  ManyToOne,
  OneToMany,
  Unique
} from "typeorm";
import { Thematic } from "./Thematic";
import { Progression } from "./Progression";

@Entity("Exercice")
export class Exercice extends BaseEntity {
  @PrimaryGeneratedColumn() 
  id;

  @Column("varchar", {unique: true})
  name;

  @Column("integer") 
  complete_point;

  @Column("integer") 
  step;

  @Column("integer") 
  point_per_step;

  @Column({ type: "jsonb", nullable: true })
  data;

  @ManyToOne(type => Thematic, thematic => thematic.exercice, { eager: true })
  thematic;

  @OneToMany(type => Progression, progression => progression.exercice)
  progression;
}
