import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Repository} from 'typeorm'
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
  ){

  }
  create(createUserDto: CreateUserDto) {
    this.usersRepository.save([createUserDto])
    return 'The user has been created'
  }

  findAll() {
    return this.usersRepository.find();

  }

  findBy(id: number) {
    return this.usersRepository.findBy({id:id})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.usersRepository.update(id, updateUserDto)
    return 'The user has been updated'
  }

  remove(id: number) {
    this.usersRepository.delete(id);
    return 'The user has been deleted'
  }
}
