import { NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class AuthcheckMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if(req.headers.authorization) {
            return next(); // Importante: usamos 'return' para terminar el flujo aquí
        }
        //res.status(403).json({code: 403, message: "Not authorized"}); // 'return' asegura que no continúa el flujo
        throw new UnauthorizedException();
    }
}