import { Module } from '@nestjs/common';
import { SaynameController } from './sayname.controller';
import { SaynameService } from './sayname.service';

@Module({
  controllers: [SaynameController],
  providers: [SaynameService]
})
export class SaynameModule {}
