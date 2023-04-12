import { QueryTypes } from 'sequelize';
import sequelize from '../models';
import homeQuery from '../utils/homeQuery';
import ILeaderBoard from '../interfaces/ILeaderBorad';

export default class LeaderboardService {
  static async getHomeLeaderboard():Promise<ILeaderBoard[]> {
    const homeBoard = await sequelize.query(homeQuery, { type: QueryTypes.SELECT });
    return homeBoard as ILeaderBoard[];
  }
}
