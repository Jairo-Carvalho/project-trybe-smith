import { Request, Response, NextFunction } from 'express';

const nameRequire = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  next();
};

const nameType = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }

  next();
};

const nameTypeLength = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (name.length <= 2) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
};

const priceRequire = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }

  next();
};

const priceType = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;
  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }

  next();
};

const priceTypeLength = (req: Request, res: Response, next: NextFunction) => {
  const { price } = req.body;
  if (price.length <= 2) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }

  next();
};

export {
  nameRequire,
  nameType,
  nameTypeLength,
  priceRequire,
  priceType,
  priceTypeLength,
};
