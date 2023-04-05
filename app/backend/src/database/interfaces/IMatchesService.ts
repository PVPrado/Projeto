import MatchesModel from '../models/MatchesModel';

export default interface IMatchesService {
  readAll(): Promise<MatchesModel[]>
  inProgress(): Promise<MatchesModel[]>
  outProgress(): Promise<MatchesModel[]>
  finished(id: number): Promise<{ message: string }>
}
