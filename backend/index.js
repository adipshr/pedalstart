const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const taskRoutes = require("./routes/taskRoutes");
const cors = require("cors");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
