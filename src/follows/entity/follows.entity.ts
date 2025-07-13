import {
  Entity,
  CreateDateColumn,
  Unique,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Profile } from 'src/profile/entity/profile.entity';

@Entity()
@Unique(['followingUser', 'followedUser'])
export class Follow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profile, { nullable: false })
  following_user: Profile;

  @ManyToOne(() => Profile, { nullable: false })
  followed_user: Profile;

  @CreateDateColumn()
  created_at: Date;
}
