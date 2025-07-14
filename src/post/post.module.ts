import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/profile/entity/profile.entity';
import { User } from 'src/user/entity/user.entity';
import { Post } from 'src/post/entity/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, User, Post])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
