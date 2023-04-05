import { Request, Response } from 'express';
import IMatchesService from '../interfaces/IMatchesService';

export default class MatchesController {
  private _service: IMatchesService;

  constructor(service: IMatchesService) {
    this._service = service;
  }

  async readAll(req: Request, res: Response): Promise<Response> {
    try {
      const allMatches = await this._service.readAll();
      return res.status(200).json(allMatches);
    } catch (error) {
      const err = error as Error;
      return res.status(404).json({ message: err.message });
    }
  }

  async inProgress(req: Request, res: Response): Promise<Response> {
    try {
      const allMatches = await this._service.inProgress();
      return res.status(200).json(allMatches);
    } catch (error) {
      const err = error as Error;
      return res.status(404).json({ message: err.message });
    }
  }

  async outProgress(req: Request, res: Response): Promise<Response> {
    try {
      const allMatches = await this._service.outProgress();
      return res.status(200).json(allMatches);
    } catch (error) {
      const err = error as Error;
      return res.status(404).json({ message: err.message });
    }
  }

  async finished(req: Request, res:Response) {
    try {
      const { id } = req.params;
      const matchesFinish = await this._service.finished(Number(id));
      return res.status(200).json(matchesFinish);
    } catch (error) {
      const err = error as Error;
      return res.status(404).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body } = req;
      const upMatch = await this._service.update(Number(id), body);
      return res.status(200).json(upMatch);
    } catch (error) {
      const err = error as Error;
      return res.status(404).json({ message: err.message });
    }
  }
}
