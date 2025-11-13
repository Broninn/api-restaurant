import e, { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";
import { ZodError } from "zod";

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

  if (err instanceof ZodError) {
    return response.status(400).json({
      status: "error",
      message: "validation error",
      issues: err.format(),
    });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
}
