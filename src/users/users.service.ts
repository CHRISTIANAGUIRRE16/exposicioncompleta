import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(data: any): Promise<User> {
 // Crea una nueva instancia de la entidad User con los datos recibidos
 const user = this.userRepository.create(data);

 // Guarda el usuario en la base de datos
 return this.userRepository.save(user);
}
}
