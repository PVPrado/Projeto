import { Request, Router, Response } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';

const leaderBoardRoutes = Router();

leaderBoardRoutes.get('/home', (req: Request, res: Response) =>
  LeaderBoardController.getHomeBoard(req, res));

export default leaderBoardRoutes;
