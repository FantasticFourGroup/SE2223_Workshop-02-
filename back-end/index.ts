import express from 'express';
import cors from "cors"

import apiRoute from "./routes/api"

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors())
    .use('/api', apiRoute)
    .get('/', (req, res) => {
        res.send('<h1>Well done!<h1>');
    })


app.listen(PORT, () => {
    console.log(`Open http://localhost:${PORT}`);
})