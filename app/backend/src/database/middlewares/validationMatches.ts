import { Request, Response, NextFunction } from 'express';
import TeamService from '../services/TeamService';

const ValidateMatches = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { homeTeamId, awayTeamId } = req.body;
    if (homeTeamId === awayTeamId) {
      return res
        .status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    next();
  } catch (error) {
    next(error);
  }
};

const ValidateMatchId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { homeTeamId, awayTeamId } = req.body;
    const team = new TeamService();
    await team.readById(homeTeamId);
    await team.readById(awayTeamId);

    next();
  } catch (error) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
};

export {
  ValidateMatches,
  ValidateMatchId,
};
