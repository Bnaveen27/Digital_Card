const express = require("express");
const connectDB = require("./Config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./Routes/AuthRoutes");
const errorHandler = require("./Middleware/ErrorHandler");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/Routes/AuthRoutes", authRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
