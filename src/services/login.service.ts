import bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwt.util';
import { Token } from '../types/Token';
import { Login } from '../types/Login';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel from '../database/models/user.model';

async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  if (!login.username || !login.password) {
    return { 
      status: 'INVALID_DATA', 
      data: { message: '"username" and "password" are required' } };
  }  

  const findUser = await UserModel.findOne({
    where: { username: login.username },
  });

  if (!findUser || !bcrypt.compareSync(login.password, findUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = findUser.dataValues;

  const token = jwtUtil.sign({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  verifyLogin,
};