import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entity/post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async uploadPost(createPostDto: CreatePostDto) {
    let post = this.postRepository.create({
      ...createPostDto,
    });

    post = await this.postRepository.save(post);

    return post;
  }
}
