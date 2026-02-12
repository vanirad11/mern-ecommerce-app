import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

//configure env
dotenv.config();

//databae config
connectDB();

//rest object
const app = express();

// Increase the limit for JSON payloads to 10MB
app.use(bodyParser.json({ limit: '10mb' }));

// Increase the limit for URL-encoded payloads (form submissions) to 10MB
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

//middleware
app.use(cors({origin:"https://mern-ecommerce-app-client-eight.vercel.app"}));
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
