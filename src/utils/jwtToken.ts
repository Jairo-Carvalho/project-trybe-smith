import jwt from 'jsonwebtoken';

type TokenPayload = {
  id: number,
  username: string,
};

const sign = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, 'secret');
  return token;
};

const verify = (token: string): TokenPayload => {
  const payload = jwt.verify(token, 'secret');
  return payload as TokenPayload;
};

export default {
  sign,
  verify,
};
