import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  mlog_title: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsInt()
  @Min(1)
  @Max(3)
  @IsNotEmpty()
  grade: number;

  @IsInt()
  @Min(1)
  @Max(4)
  @IsNotEmpty()
  class: number;

  @IsString()
  @IsNotEmpty()
  bio: string;

  @IsString()
  @IsNotEmpty()
  profile_image_url: string;
}
