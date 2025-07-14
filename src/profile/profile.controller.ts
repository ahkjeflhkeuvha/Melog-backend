import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Controller('users')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('/signup')
  async createProfile(@Body() createProfileDto: CreateProfileDto) {
    return await this.profileService.createProfile(createProfileDto);
  }

  @Get('/:userId')
  async getProfileByUserId(@Param('userId') userId: number) {
    return await this.profileService.getProfileByUserId(userId);
  }
}
