import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from 'src/profile/entity/profile.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  thumbnail_url: string;

  @Column({ default: 0 })
  like_count: number;

  @Column({ default: 0 })
  view_count: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Profile, (profile) => profile.posts)
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;
}
