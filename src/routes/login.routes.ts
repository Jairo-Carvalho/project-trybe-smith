import { Router } from 'express';

import loginController from '../controllers/login.controller';

const loginRoute = Router();

loginRoute.post('/', loginController.login);

export default loginRoute;