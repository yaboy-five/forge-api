import app from './app.js';

const port = process.env.port || 5000;

app.listen(port, err => {
    console.log(`Listening on port: ${port}`)
});

