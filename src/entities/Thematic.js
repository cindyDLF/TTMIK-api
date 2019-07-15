import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("Thematic")
export class Thematic extends BaseEntity {
  @PrimaryGeneratedColumn() id;

  @Column("varchar") name;
}
