import { SumService } from './sum/sum.service';
import { BadRequestException, Body, Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sumService: SumService
  ) {}

  @Get()
  getHello(@Req() req, @Res() res) {
    // console.log(req.headers);
    //return this.appService.getHello();
    res.status(200).json({
      res: this.appService.getHello(),
    });
  }

  @Get('/sum')
    getSum(
      @Query('num1') a,
      @Query('num2') b
    ) {
      return this.sumService.getSum(a,b);
    }

  // http://localhost:3000/?name=Isra&age=37
  // @Get()
  // getQueryStrings(@Query('name') username, @Query('age') age): string {
  //   return `${username}, ${age}`;
  // }

  @Get('/askquestion')
  askQuestion() {
    return 'how are you?';
  }

  @Post('/answer')
  answer(@Body() getAnswerDto: AnswerDto) {
    return {
      answer: getAnswerDto.answer,
    };
  }

  @Post('/answer2')
  answer2(
    @Body() getAnswerDto: AnswerDto,
    @Req() req,
    @Res() res
    ) {
      let response;
      let status;
      if(req.body.answer === 'yes') {
        response = "It is yes";
        status = 200;
      } else {
        // response = "It is no";
        // status = 400;
        throw new BadRequestException();
      }
      res.status(status).json({
        res: response
      });
    }

  @Get(':id')
  getRoutePAram(@Param('id') userId): string {
    return `${userId}`;
  }
}
