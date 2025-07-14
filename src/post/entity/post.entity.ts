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

  @ManyToOne(() => Profile, (profile) => profile.posts) // Profile과 다대일 관계
  @JoinColumn({ name: 'profile_id' }) // profile_id 설정을 하지 않을 시 typeORM이 자동으로 profileId 생성 -> 맞는 컬럼을 찾지 못해 에러
  profile: Profile;
}
