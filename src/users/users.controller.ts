import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() data: any) {
    // Lógica para guardar los datos en la base de datos
  }
}
