import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UserService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 4200,
      username: 'postgres',
      password: '1234',
      database: 'ejemploRegistro',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UserService],
})
export class AppModule {}
