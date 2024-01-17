// import bcrypt from 'bcryptjs';
import bcript from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import jwtToken from '../utils/jwtToken';

async function loginVerify(userNameParam: string, password: string): Promise<ServiceResponse> {
  if (!userNameParam || !password) {
    return { message: '"username" and "password" are required', statusCode: 400 };
  }
  
  const userModel = await UserModel.findOne({ where: { username: userNameParam } });

  if (!userModel) {
    return { message: 'Username or password invalid', statusCode: 401 };
  }

  const verifyPassword = bcript.compareSync(password, userModel.dataValues.password);

  if (!verifyPassword) {
    return { message: 'Username or password invalid', statusCode: 401 };
  }

  const { id, username } = userModel.dataValues;
  const token = jwtToken.sign({ id, username });
  
  return { message: { token }, statusCode: 200 };
}

export default {
  loginVerify,
};
