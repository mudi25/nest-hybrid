import { Controller, Req, Res, Post } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('hello.rest')
export class RestController {
  @Post()
  hello(@Req() req: Request, @Res() res: Response) {
    return res.status(200).send('rest');
  }
}
