import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumService } from './sum/sum.service';
import { SaynameModule } from './sayname/sayname.module';

@Module({
  imports: [SaynameModule],
  controllers: [AppController],
  providers: [AppService, SumService],
})
export class AppModule {}
