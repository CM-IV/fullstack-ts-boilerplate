import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from express and typescript');
});

app.listen(port, () => console.log(`App listening on port ${port}`));