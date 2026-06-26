//logging middleware

const express = require("express");
const cors = require("cors");
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
const menuRoutes = require("./routes/menuRoute");
const cartRoutes = require("./routes/cartRoute");
const checkoutRoutes = require("./routes/checkoutRoute");
const statusRoutes = require("./routes/statusRoute");

app.use("/menu", menuRoutes);
app.use("/cart", cartRoutes);
app.use("/checkout", checkoutRoutes);
app.use("/status", statusRoutes);

// health check
app.get("/health", (req, res) => {
    res.json({ status: "API running correctly" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});