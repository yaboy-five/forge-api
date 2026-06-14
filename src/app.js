import React, { useEffect, useState } from  "react";
import axios from './axios';

const express = require('express');
const morgan = require('morgan');
const app = express();

//logging middleware
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/menu', menuRoute);
app.use('/status', statusRoute);
app.use('/cart', cartRoute);
app.use('/checkout', checkoutRoute);
app.use('/order', orderRoute);

app.get("/", (req, res) => {
    res.send("FoodForge API is running")
});

// Axios API Call
const axios = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        getRecipes();
        // axios
        //     .get("/recipes")
        //     .then((res) => setRecipes(res.data.recipes))
        //     .catch((error) => setError(error.message));
    }, []);

    async function getRecipes () {
        try {
            const response = await axios.get('./recipes')
        console.log(response);
        setRecipes(response.data.recipes);
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div>
            {error !== "" && error}
            {recipes.map((recipe, index) => {
                return (
                    <h3 key={index}>
                        {recipe.name} - ${recipe.ingredients}
                    </h3>
                );
            })}
        </div>
    );
};

//error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;
