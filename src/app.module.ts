import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'tuffi.db.elephantsql.com',
      port: 5432,
      username: 'hlnkheal',
      password: 'tgQfvfYEDyl4g8EthLE-i7cl3Yvs1JZr',
      database: 'hlnkheal',
      models: [],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
