import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const response = await loginService.loginVerify(username, password);
  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.message);
  }

  return res.status(response.statusCode).json({ message: response.message });
}

export default {
  login,
};
