import { Module } from '@nestjs/common';
import { LeaveRequestsService } from './leave-request.service';
import { LeaveRequestController } from './leave-request.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { LeaveRequest } from './entities/leave-request.entity';

@Module({
  imports: [SequelizeModule.forFeature([LeaveRequest])],
  controllers: [LeaveRequestController],
  providers: [LeaveRequestsService]
})
export class LeaveRequestModule {}
