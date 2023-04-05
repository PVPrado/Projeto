import { ModelStatic } from 'sequelize';
import IMatchesService from '../interfaces/IMatchesService';
import MatchesModel from '../models/MatchesModel';
import TeamModel from '../models/TeamModel';
import IUpGoals from '../interfaces/IUpGoals';
import ICreateMatches from '../interfaces/ICreateMatches';

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

  async update(id: number, upGoals: IUpGoals): Promise<[number]> {
    const upMatch = await this.model.update({ ...upGoals }, { where: { id } });
    return upMatch;
  }

  async create(body: ICreateMatches): Promise<MatchesModel> {
    const newMatch = await this.model.create({
      ...body });
    return newMatch;
  }
}
