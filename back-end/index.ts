import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.listen(PORT, () => {
    console.log(`Open http://localhost:${PORT}`);
})