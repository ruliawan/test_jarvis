import express from 'express';
import cookiesParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookiesParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api", authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di port ${process.env.PORT}`);
});
