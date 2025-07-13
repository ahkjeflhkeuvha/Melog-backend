import {
  CreateDateColumn,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Post } from 'src/post/entity/post.entity';
import { Profile } from 'src/profile/entity/profile.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  content: string;

  @ManyToOne(() => Post, { nullable: false })
  post: Post;

  @ManyToOne(() => Profile, { nullable: false })
  user: Profile;

  @CreateDateColumn()
  created_at: Date;
}
