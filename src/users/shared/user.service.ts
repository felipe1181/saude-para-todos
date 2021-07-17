import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {
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
    return this.users;
  }
  getById(id: string) {
    const findUser = this.users.find((value) => value.id === id);
    return findUser;
  }
  create(user: User) {
    user.id = Math.random().toString(36).substring(7);
    this.users.push(user);
    return user;
  }
  update(user: User) {
    const findUser = this.getById(user.id);
    if (findUser) {
      findUser.name = user.name;
      findUser.age = user.age;
      return findUser;
    }
    return user;
  }
  delete(id: string) {
    const findIndexUser = this.users.findIndex((user) => user.id === id);
    this.users.splice(findIndexUser, 1);
  }
}
