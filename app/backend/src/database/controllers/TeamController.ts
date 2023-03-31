import { Request, Response } from 'express';
import IServiceTeam from '../interfaces/IServiceTeam';

export default class TeamController {
  private _service: IServiceTeam;

  constructor(service: IServiceTeam) {
    this._service = service;
  }

  async readAll(req:Request, res:Response): Promise<Response> {
    try {
      const allTeams = await this._service.readAll();
      return res.status(200).json(allTeams);
    } catch (error) {
      const err = error as Error;
      return res.status(404).json({ message: err.message });
    }
  }
}
