import { User } from 'src/user/entity/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, { nullable: false })
  @JoinColumn()
  user: User;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  grade: number;

  @Column({ nullable: false })
  class: number;

  @Column({ nullable: false })
  text: string;

  @Column()
  profile_image_url: string;

  @Column({ default: 0 })
  follower_count: number;

  @Column({ default: 0 })
  following_count: number;
}
