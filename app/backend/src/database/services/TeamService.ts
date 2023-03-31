import { ModelStatic } from 'sequelize';
import IServiceTeam from '../interfaces/IServiceTeam';
import TeamModel from '../models/TeamModel';

export default class TeamService implements IServiceTeam {
  protected model: ModelStatic<TeamModel> = TeamModel;

  async readAll(): Promise<TeamModel[]> {
    const allTeams = await this.model.findAll();
    return allTeams;
  }

  async readById(id:number): Promise<TeamModel> {
    const team = await this.model.findOne({ where: { id } });
    if (!team) throw new Error('Team not found');
    return team;
  }
}
