import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.create(createUserDto );

    return user;
  }

  async findAll() {
    const Users = await this.userModel.findAll();

    return { data: Users };
  }

  async findOne(id: number) {
    const User = await this.userModel.findOne({
      where: { id },
    });

    return User;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const [affectedRow, result] = await this.userModel.update(
      updateUserDto,
      { where: { id }, returning: true },
    );

    if (affectedRow === 0) {
      throw new NotFoundException();
    }

    const [User] = result;

    return User;
  }

  async remove(id: number) {
    const affectedRow = await this.userModel.destroy({
      where: { id },
    });

    if (affectedRow === 0) {
      throw new NotFoundException();
    }
  }
}