import { Request, Response, NextFunction } from 'express';

export default function errorMiddleware(err: unknown, req: Request, res: Response, next: NextFunction) {
  console.log(err);
  return res.status(500).json({ message: 'Something went wrong!' });
}