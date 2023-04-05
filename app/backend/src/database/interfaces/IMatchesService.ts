import MatchesModel from '../models/MatchesModel';
import IUpGoals from './IUpGoals';
import ICreateMatches from './ICreateMatches';

export default interface IMatchesService {
  readAll(): Promise<MatchesModel[]>
  inProgress(): Promise<MatchesModel[]>
  outProgress(): Promise<MatchesModel[]>
  finished(id: number): Promise<{ message: string }>
  update(id: number, upGoals: IUpGoals): Promise<[number]>
  create(body: ICreateMatches): Promise<MatchesModel>
}
