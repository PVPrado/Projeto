import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';

export default class LeaderBoardController {
  static async getHomeBoard(_req: Request, res: Response): Promise<void> {
    const homeBoardData = await LeaderBoardService.getHomeLeaderboard();
    res.status(200).json(homeBoardData);
  }
}
