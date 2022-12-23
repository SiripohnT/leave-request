import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeaveRequestsService } from './leave-request.service';
import { CreateLeaveRequestDto } from './dto/create-leave-request.dto';
import { UpdateLeaveRequestDto } from './dto/update-leave-request.dto';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { HttpCode, Put } from '@nestjs/common/decorators';

@Controller('leave-requests')
export class LeaveRequestController {
  constructor(private readonly leaveRequestsService: LeaveRequestsService) {}

  @Post()
  create(@Body() createLeaveRequestDto: CreateLeaveRequestDto) {
    return this.leaveRequestsService.create(createLeaveRequestDto);
  }

  @Get()
  findAll() {
    return this.leaveRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.leaveRequestsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number,
  @Body() updateLeaveRequestDto: UpdateLeaveRequestDto,
) {
  return this.leaveRequestsService.update(id, updateLeaveRequestDto);
}

@HttpCode(204)
@Delete(':id')
remove(@Param('id', ParseIntPipe) id: number) {
  return this.leaveRequestsService.remove(id);
}
}
