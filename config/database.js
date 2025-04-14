import mongoose from "mongoose";
import { MONGODB_URI } from './app.js';

mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('Database connected'))
    .catch(error => console.error(error))
export const db = mongoose.connection