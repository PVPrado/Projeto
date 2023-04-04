import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  private _service: UserService;

  constructor(service: UserService) {
    this._service = service;
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await this._service.login({ email, password });
      return res.status(200).json(token);
    } catch (error) {
      const err = error as Error;
      return res.status(401).json({ message: err.message });
    }
  }

  static role(_req: Request, res: Response) {
    try {
      const { payload } = res.locals.user;
      const { role } = payload;
      res.status(200).json({ role });
    } catch (error) {
      const err = error as Error;
      return res.status(401).json({ message: err.message });
    }
  }
}
