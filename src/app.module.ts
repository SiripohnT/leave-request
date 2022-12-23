import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaveRequestModule } from './modules/leave-request/leave-request.module';
import { UsersModule } from './modules/users/users.module';
import { LeaveTypesModule } from './modules/leave-types/leave-types.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot({
    username: 'postgres',
    password: 'SSSpoom79',
    database: 'leave-request',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    autoLoadModels: true,
    synchronize: true,
  }),LeaveRequestModule, UsersModule, LeaveTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
