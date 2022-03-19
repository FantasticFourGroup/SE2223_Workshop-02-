import express from 'express';

import apiRoute from "./routes/api"

const app = express();
const PORT = process.env.PORT || 3000;


app.use('/api', apiRoute)
app.get('/', (req, res) => {
    res.send('Well done!');
})


app.listen(PORT, () => {
    console.log(`Open http://localhost:${PORT}`);
})