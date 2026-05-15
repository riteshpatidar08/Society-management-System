import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db/config.js';
import authRoutes from './routes/auth.routes.js';
import roleRoutes from './routes/role.routes.js';
import flatRoutes from './routes/flat.routes.js';
import UserRoutes from './routes/user.routes.js'
import cookieParser from 'cookie-parser' ;
import visitorsRoutes from './routes/visitors.routes.js'
import cors from 'cors'
const app = express();
app.use(express.json());

app.use(cors({
  origin : "http://localhost:5173",
 credentials : true 
}));


dotenv.config();
app.use(cookieParser())

//NOTE  function to connect with mongodb
connectDb();

app.get('/health', (req, res) => {
  res.send('Health is ok.');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', UserRoutes)
app.use('/api/v1/roles', roleRoutes);
app.use('/api/v1/flats', flatRoutes);
app.use('/api/v1' , visitorsRoutes)
app.listen(3000, () => {
  console.log('server is running');
});

//deployment client + back
