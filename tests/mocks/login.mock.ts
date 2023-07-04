import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

const userLogin = {
  username: 'Hagar',
  vocation: 'Guerreiro',
  level: 10,
  password: bcrypt.hashSync('terrível', SALT_ROUNDS),
};

const loginSuccess =  {
  username: 'Hagar',
  password: 'terrível'
};

const loginErrorName =  {
  username: 'Jairo',
  password: 'terrível'
};

const loginErrorPassword =  {
  username: 'Hagar',
  password: 'seila'
};

const loginNameVoid =  {
  password: 'terrível'
};

export default {
  userLogin,
  loginSuccess,
  loginErrorName,
  loginErrorPassword,
  loginNameVoid,
};