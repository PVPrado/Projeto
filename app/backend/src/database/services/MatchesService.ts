import { ModelStatic } from 'sequelize';
import IMatchesService from '../interfaces/IMatchesService';
import MatchesModel from '../models/MatchesModel';
import TeamModel from '../models/TeamModel';

export default class MatchesService implements IMatchesService {
  protected model: ModelStatic<MatchesModel> = MatchesModel;

  async readAll(): Promise<MatchesModel[]> {
    const allMatches = await this.model.findAll({
      include: [{
        model: TeamModel, as: 'homeTeam', attributes: { exclude: ['id'] },
      }, {
        model: TeamModel, as: 'awayTeam', attributes: { exclude: ['id'] },
      },
      ],
    });
    return allMatches;
  }

  async inProgress(): Promise<MatchesModel[]> {
    const allMatches = await this.model.findAll({
      where: { inProgress: true },
      include: [{
        model: TeamModel, as: 'homeTeam', attributes: { exclude: ['id'] },
      }, {
        model: TeamModel, as: 'awayTeam', attributes: { exclude: ['id'] },
      },
      ],
    });
    return allMatches;
  }

  async outProgress(): Promise<MatchesModel[]> {
    const allMatches = await this.model.findAll({
      where: { inProgress: false },
      include: [{
        model: TeamModel, as: 'homeTeam', attributes: { exclude: ['id'] },
      }, {
        model: TeamModel, as: 'awayTeam', attributes: { exclude: ['id'] },
      },
      ],
    });
    return allMatches;
  }

  async finished(id: number): Promise<{ message: string }> {
    await this.model.update({ inProgress: false }, {
      where: { id },
    });
    return { message: 'Finished' };
  }
}
