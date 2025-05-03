import * as AuthService from '../services/authService.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await AuthService.register(name, email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await AuthService.login(email, password);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
