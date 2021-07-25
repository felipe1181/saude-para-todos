import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  private readonly users: User[] = [
    {
      id: '60f3213aed6a4769b9cc3aa7',
      name: 'Briana Rollins',
      age: 856,
    },
    {
      id: '60f3213aaed44ac4028457dc',
      name: 'Allison Bailey',
      age: 323,
    },
    {
      id: '60f3213a4551fed266eb2168',
      name: 'Lynnette Massey',
      age: 544,
    },
    {
      id: '60f3213a185d4db2807b927b',
      name: 'Gaines Beach',
      age: 866,
    },
    {
      id: '60f3213a1564701220b1d098',
      name: 'Leslie Vazquez',
      age: 384,
    },
    {
      id: '60f3213a554dc34981065c50',
      name: 'Pierce Sweet',
      age: 534,
    },
    {
      id: '60f3213a5a6ab56bb7e3b4c4',
      name: 'Gloria Gates',
      age: 674,
    },
  ];

  getAll() {
    return this.usersRepository.find();
  }
  getById(id: string) {
    return this.usersRepository.findOne(id);
  }
  create(user: User) {
    return this.usersRepository.save(user);
  }
  async update(user: User) {
    const findUser = await this.getById(user.id);
    if (!findUser) throw new NotFoundException('Usuário não encontrado');
    const userUpdated = Object.assign(findUser, user);
    return this.usersRepository.save(userUpdated);
  }
  delete(id: string) {
    this.usersRepository.delete(id);
  }
}
