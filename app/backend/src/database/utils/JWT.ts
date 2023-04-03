import { SignOptions, sign } from 'jsonwebtoken';
import 'dotenv/config';
import ILogin from '../interfaces/ILogin';

const secret = process.env.JWT_SECRET as string;

const generateToken = (payload: ILogin) => {
  const jwtConfig: SignOptions = {
    expiresIn: '48h',
    algorithm: 'HS256',
  };

  const token = sign({ payload }, secret, jwtConfig);
  return token;
};

export default generateToken;
