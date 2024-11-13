import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import bookRoutes from './routes/book.js';
import transactionRoutes from "./routes/transactions.js";
import categoryRoutes from './routes/category.js';
import dbConnect from './connectDB.js'

/* App Config */
dotenv.config();
const app = express();
dbConnect();
const port = process.env.PORT || 3000;

/* Middlewares */
app.use(express.json());
app.use(cors());

/* API Routes */
app.use("/images",express.static("images"))
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/books", bookRoutes);
app.use("/transactions", transactionRoutes);
app.use("/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to LibraryApp");
});

/* Port Listening In */
app.listen(port, () => {
  try {
    console.log(`Server is running in PORT ${port}`);
    // Code where the error might occur
  } catch (error) {
    console.error('Error occurred:', error);
    // Handle the error or log additional information
  }
  
});
