import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";
import bcrypt from "bcrypt";

export enum UserRole {
  USER = "user",
  ADMIN = "admin",
}

export enum AuthProvider {
  LOCAL = "local",
  GOOGLE = "google",
  FACEBOOK = "facebook",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  profilePicture: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Column({
    type: "enum",
    enum: AuthProvider,
    default: AuthProvider.LOCAL,
  })
  provider: AuthProvider;

  @Column({ nullable: true })
  providerId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    if (this.password && this.provider === AuthProvider.LOCAL) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  async comparePassword(candidatePassword: string): Promise<boolean> {
    if (!this.password) return false;
    return bcrypt.compare(candidatePassword, this.password);
  }
}
