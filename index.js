const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Main Routes.
app.use('/', require("./routes/index.js"));

// Starting Server.
app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});