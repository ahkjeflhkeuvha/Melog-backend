import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entity/profile.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { User } from 'src/user/entity/user.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createProfile(createProfileDto: CreateProfileDto) {
    let user = await this.userRepository.findOne({
      where: { email: createProfileDto.email },
    });

    if (!user) {
      user = this.userRepository.create({ email: createProfileDto.email });
      user = await this.userRepository.save(user);
    }

    let profile = this.profileRepository.create({
      ...createProfileDto,
      user, // 여기서 user 관계를 주입
    });

    profile = await this.profileRepository.save(profile);

    // 메모리상 관계도 연결
    user.profile = profile;

    return profile;
  }
}
