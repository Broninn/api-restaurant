import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";

export function errorHandling(
  err: any,
  res: Request,
  response: Response,
  _: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
}
