import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.use(
  cors({
  origin: "http://localhost:5173"
})); // to handle the cors errors
//middleware
app.use(express.json()); // this middleware will parse the JSON bodies ie. in this care req.body 
app.use(rateLimiter); // middleware for rate limiting


//our simple custom middleware
// app.use((req, res, next) =>{
//   console.log(`Request method id ${req.method} and request URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});


 