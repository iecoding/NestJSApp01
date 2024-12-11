import { Injectable } from '@nestjs/common';

@Injectable()
export class SumService {
    getSum(a,b) {
        return parseInt(a)+parseInt(b);
    }
}
