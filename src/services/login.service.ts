import bcrypt from 'bcryptjs';
import jwtUtil from 'src/utils/jwt.util';
import { Token } from 'src/types/Token';
import { Login } from 'src/types/Login';
import { ServiceResponse } from 'src/types/ServiceResponse';
import UserModel from '../database/models/user.model';

async function verifyLogin(login: Login): Promise<ServiceResponse<Token>> {
  const findUser = await UserModel.findOne({
    where: { username: login.username },
  });

  if (!findUser || !bcrypt.compareSync(login.password, findUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Email ou senha inválidos' } };
  }

  const { id, username } = findUser.dataValues;

  const token = jwtUtil.sign({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  verifyLogin,
};