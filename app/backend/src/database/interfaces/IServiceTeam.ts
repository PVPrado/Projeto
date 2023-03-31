import TeamModel from '../models/TeamModel';

export default interface IServiceTeam {
  readAll(): Promise<TeamModel[]>
}
