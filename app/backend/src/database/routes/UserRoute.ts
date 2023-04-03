import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';
import loginValidation from '../middlewares/validateLogin';

const userRoutes = Router();
const userService = new UserService();
const userController = new UserController(userService);

userRoutes.post(
  '/',
  loginValidation,
  (req: Request, res: Response) => userController.login(req, res),
);

export default userRoutes;
