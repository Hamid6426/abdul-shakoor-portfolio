import jwt from 'jsonwebtoken';

const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as { id: string; email: string };
};

export default verifyToken;
