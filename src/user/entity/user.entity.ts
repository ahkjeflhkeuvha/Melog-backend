import { Profile } from 'src/profile/entity/profile.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @OneToOne(() => Profile, (profile) => profile.user, { nullable: false })
  profile: Profile;
}
