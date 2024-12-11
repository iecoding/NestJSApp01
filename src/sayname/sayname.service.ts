import { Injectable } from '@nestjs/common';

@Injectable()
export class SaynameService {
    sayMyName(name){
        return `My name is ${name}`;
    }
}
