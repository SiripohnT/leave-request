import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { LeaveRequest } from "src/modules/leave-request/entities/leave-request.entity";


@Table
export class LeaveType extends Model<LeaveType> {
    //Define Column
  @Column
  name: string;

  //Define keys relation

//Define associations
@HasMany(() => LeaveRequest)
  leaveRequests: LeaveRequest[];
}
