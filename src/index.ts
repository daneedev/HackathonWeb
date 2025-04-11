import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import nunjucks from 'nunjucks';
const app = express();
import api from './routes/api';
import home from './routes/home';

nunjucks.configure("src/views", {
    autoescape: true,
    express: app,
    watch: true
});

app.use("/", express.static(__dirname + "/public"));

app.use(bodyParser.json());

app.use("/", home)
app.use("/api", api);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})