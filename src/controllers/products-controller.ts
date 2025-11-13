import { NextFunction, Request, Response } from "express";
import { z } from "zod";

class ProductsController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      // Logic to list products
      return response.status(200).json({ message: "List of products" });
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0),
      });

      const { name, price } = bodySchema.parse(request.body);

      // Logic to create a new productF
      return response.status(201).json({ name, price });
    } catch (error) {
      next(error);
    }
  }
}

export { ProductsController };
