import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

export default class TeamModel extends Model {
  declare readonly id: number;
  declare teamName: string;
}

TeamModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    allowNull: false,
    type: STRING(255),
    field: 'team_name',
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'teams',
});
