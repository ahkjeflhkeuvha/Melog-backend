import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entity/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { Profile } from 'src/profile/entity/profile.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async uploadPost(createPostDto: CreatePostDto) {
    console.log(createPostDto);
    const profile = await this.profileRepository.findOne({
      where: {
        user: { id: createPostDto.user_id }, // Profile에서 user.id를 조건으로 검색
      },
    });

    if (!profile) {
      throw new NotFoundException('해당 유저의 프로필이 없습니다.');
    }

    let post = this.postRepository.create({
      ...createPostDto,
      profile, // profile 엔티티 전체 fk로 관계 주입
    });

    post = await this.postRepository.save(post);

    return post;
  }
}
