/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as root from 'root-path';

@Injectable()
export class AdminUIMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { url } = req;
    if (url.includes("api")) {
      next();
    } else {
      res.sendFile(root("/admin/index.html"));
    }
  }
}