import express from "express";
import { filmRouter } from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (_req, res) => {
    res.status(200).send('Welcome !')

})

app.use('/films', filmRouter);

export default app;
