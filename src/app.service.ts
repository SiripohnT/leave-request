import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private sequelize: Sequelize) {}

  async connect() {
    try {
      await this.sequelize.authenticate();
      console.log('Connect to database successfully...');
    } catch (error) {
      console.log('Unable to connect database: ', error);
    }
  }
}
