import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
