import express from "express";
import morgan from "morgan";

import router from "./routes/authRoute.js";

const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/auth", authRoutes);

import menuRoute from "./routes/menuRoute.js";
import statusRoute from "./routes/statusRoute.js";
import cartRoute from "./routes/cartRoute.js";
import checkoutRoute from "./routes/checkoutRoute.js";
import orderRoute from "./routes/orderRoute.js";

app.use('/menu', menuRoute);
app.use('/status', statusRoute);
app.use('/cart', cartRoute);
app.use('/checkout', checkoutRoute);
app.use('/order', orderRoute);

app.get("/", (req, res) => {
    res.send("FoodForge API is running")
});

//error 404 Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

//error Handling
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

export default app;
