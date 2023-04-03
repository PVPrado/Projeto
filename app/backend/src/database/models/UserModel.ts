import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

export default class UserModel extends Model {
  declare readonly id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

UserModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  username: {
    allowNull: false,
    type: STRING(255),
  },
  role: {
    allowNull: false,
    type: STRING(255),
  },
  email: {
    allowNull: false,
    type: STRING(255),
  },
  password: {
    allowNull: false,
    type: STRING(255),
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'users',
});
