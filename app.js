import express, { response } from 'express';
import { Router } from 'express'
import './config/database.js'
import { Bird } from './models/Bird.js';
import { logger } from './middleware/logger.js';
import { PORT } from './config/app.js'
import birdroutes from './controllers/bird.js'
import simpleroutes from './controllers/simple_bird.js'
const app = express();

const router = Router()


app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("views", "./pages");
app.set("view engine", "ejs");
app.use(birdroutes)
app.use(simpleroutes)


// Start server
app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Running on ${PORT}`);
});



/*app.listen(process.env.PORT || 3500, 'localhost', () => {
  console.log(`Running on http://localhost:${process.env.PORT || 3000}`);
});*/

