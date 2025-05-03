import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (name, email, password) => {
  const existing = await findUserByEmail(email);
  if (existing) throw new Error('Email já registrado');
  
  const hashed = await bcrypt.hash(password, 10);
  return await createUser(name, email, hashed);
};

export const login = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Email ou senha inválidos');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Email ou senha inválidos');

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};
