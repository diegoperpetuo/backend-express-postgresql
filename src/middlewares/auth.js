import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateToken = (req, res, next) => {
  const auth = req.headers['authorization'];
  const token = auth && auth.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token ausente' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user;
    next();
  });
};
