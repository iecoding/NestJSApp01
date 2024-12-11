import { SaynameService } from './sayname.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { SaynameDto } from 'src/dto/sayname.dto';

@Controller('sayname')
export class SaynameController {

    constructor(
        private readonly saynameService: SaynameService
    ) {

    }

    @Post()
    sayMyName(@Body() name: SaynameDto){
        return this.saynameService.sayMyName(name.name);
    }
}
