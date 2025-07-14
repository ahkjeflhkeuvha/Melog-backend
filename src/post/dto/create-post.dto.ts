import { IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  @IsOptional()
  thumbnail_url?: string;

  user_id: number; // 게시글 작성자 id query로 받아와서 주입
}
