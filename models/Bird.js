import mongoose from "mongoose";
const birdSchema = new mongoose.Schema({
  slug: { type: String, unique: true, required: true},
  name: { type: String, required: true},
  date: { type: Date, required: true},
  time: { type: String, required: true},
  user: { type: String, required: true},
  img:  { type: String, required: false}
});


export const Bird = mongoose.model('Bird', birdSchema);
