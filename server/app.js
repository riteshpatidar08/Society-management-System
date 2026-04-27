import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/config.js';
import authRoutes from './routes/auth.routes.js';
const app = express();
app.use(express.json());
dotenv.config();

//NOTE  function to connect with mongodb
connectDb();

app.get('/health', (req, res) => {
  res.send('Health is ok.');
});

app.use('/api/v1/auth', authRoutes);

app.listen(3000, () => {
  console.log('server is running');
});

//deployment client + back
