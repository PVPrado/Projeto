import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/MatchesController';
import MatchesService from '../services/MatchesService';
import ValidateJwt from '../middlewares/validateJWT';

const matchesRoutes = Router();
const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);

matchesRoutes.get('/', (req: Request, res: Response) => {
  if (req.query.inProgress === 'true') {
    return matchesController.inProgress(req, res);
  }

  if (req.query.inProgress === 'false') {
    return matchesController.outProgress(req, res);
  }

  return matchesController.readAll(req, res);
});

matchesRoutes.patch(
  '/:id/finish',
  ValidateJwt,
  (req: Request, res: Response) => matchesController.finished(req, res),
);

matchesRoutes.patch(
  '/:id',
  ValidateJwt,
  (req: Request, res: Response) => matchesController.update(req, res),
);

matchesRoutes.post(
  '/',
  ValidateJwt,
  (req: Request, res: Response) => { matchesController.create(req, res); },
);

export default matchesRoutes;
