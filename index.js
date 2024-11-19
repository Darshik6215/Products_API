import express from "express";
import connectDB from "./Connection/connectionDB.js";
import router from "./Routes/router.js";

const app = express();
const PORT = 3000;

// Middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data Base Connection:
connectDB();

// Routes:
app.use("/product", router);

// Path:
app.listen(PORT, () =>
  console.log(`Listening on PORT http://localhost:${PORT}`)
);
