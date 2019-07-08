import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Index
} from "typeorm";

@Entity("User")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() id;

  @Column("varchar") username;

  @Column("varchar") password;

  @Index({ unique: true })
  @Column("varchar")
  email;

  @Column("integer") point;

  @Column("integer", { default: 1 })
  level;

  @Column("timestamp") date_register;
}
