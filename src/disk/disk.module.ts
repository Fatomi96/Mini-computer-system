import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { DiskService } from './disk.service';

@Module({
  exports: [DiskService],
  imports: [PowerModule],
  providers: [DiskService],
})
export class DiskModule {}
