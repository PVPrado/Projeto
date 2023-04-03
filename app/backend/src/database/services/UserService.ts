import * as bcrypt from 'bcryptjs';
import { ModelStatic } from 'sequelize';
import ILogin from '../interfaces/ILogin';
import IToken from '../interfaces/IToken';
import UserModel from '../models/UserModel';
import generateToken from '../utils/JWT';

export default class UserService {
  protected model: ModelStatic<UserModel> = UserModel;

  async login({ email, password }: ILogin): Promise<IToken> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) throw new Error('Invalid email or password');

    const token = generateToken(user);
    const passwordBcrypt = bcrypt.compareSync(password, user.password);
    if (!passwordBcrypt) throw new Error('Invalid email or password');

    return { token };
  }
}
