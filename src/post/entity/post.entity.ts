import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

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
}
