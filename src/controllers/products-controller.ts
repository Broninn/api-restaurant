import { NextFunction, Request, Response} from 'express';

class ProductsController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {
            // Logic to list products
            return response.status(200).json({ message: 'List of products' });
        } catch (error) {
            next(error);
        }
    }
}

export { ProductsController };