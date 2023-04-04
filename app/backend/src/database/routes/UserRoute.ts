import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';
import validateLogin from '../middlewares/validateLogin';
import ValidateJwt from '../middlewares/validateJWT';

const userRoutes = Router();
const userService = new UserService();
const userController = new UserController(userService);

userRoutes.post(
  '/',
  validateLogin,
  (req: Request, res: Response) => userController.login(req, res),
);
userRoutes.get(
  '/role',
  ValidateJwt,
  (req: Request, res: Response) => UserController.role(req, res),
);

export default userRoutes;
