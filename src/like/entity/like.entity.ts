import { Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Post } from 'src/post/entity/post.entity';
import { Profile } from 'src/profile/entity/profile.entity';

@Entity()
@Unique(['post', 'user'])
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post, { nullable: false })
  post: Post;

  @ManyToOne(() => Profile, { nullable: false })
  user: Profile;
}
