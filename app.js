import express, { response } from 'express';
import mongoose from 'mongoose';
import { logger } from './middleware/logger.js';
import 'dotenv/config'
const app = express();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('mongodb connected'))
  .catch(error => console.error(error));
const birdSchema = new mongoose.Schema({
  slug: { type: String, unique: true, required: true},
  name: { type: String, required: true},
  date: { type: Date, required: true},
  time: { type: String, required: true},
  user: { type: String, required: true},
  img:  { type: String, required: false}
});


const Bird = mongoose.model('Bird', birdSchema);


app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));
app.set("views", "./pages");
app.set("view engine", "ejs");


//make a new bird entry C
app.get('/birds/new', (request, response) => {
  response.render('birds/new');
});

app.post('/birds', async (request, response) => {
  try {
    const bird = new Bird({
      slug: request.body.slug,
      name: request.body.name,
      date: new Date(request.body.date),
      time: request.body.time,
      user: request.body.user,
      img: request.body.img
    });
    await bird.save();

    response.redirect('/');
  } catch (error) {
    console.error(error);
    response.send('Error: The bird entry could not be created.');
  }
});

//read bird entry CR
app.get('/', async (request, response) => {
  try {
    const birds = await Bird.find({}).exec();

    response.render('index', { 
      entries: birds
    });
  } catch (error) {
    console.error(error);
    response.render('index', { 
      entries: []
    });
  }
});

//read specific bird entry
app.get('/birds/:slug', async (request, response) => {
  try {
    const slug = request.params.slug;
    const bird = await Bird.findOne({ slug: slug }).exec();

    response.render('birds/show', { 
      bird: bird
    });
  } catch (error) {
    console.error(error);
    response.status(404).send('Could not find the bird entry you\'re looking for.');
  }
});

//edit a bird entry CRU
app.get('/birds/:slug/edit', async (request, response) => {
  try {
    const slug = request.params.slug;
    const bird = await Bird.findOne({ slug: slug }).exec()
    if(!bird) throw new Error('Bird entry not found')

    response.render('birds/edit.ejs', {bird : bird});
  } catch (error) {
    console.error(error)
    response.status(404).send('Could not find the bird you\'re looking for.')
  }
});

app.post('/birds/:slug', async (request, response) => {
  try{
    const bird = await Bird.findOneAndUpdate(
      {slug: request.params.slug},
      request.body
    )
  response.redirect('/')
  }catch (error) {
    console.error(error)
    response.send('Error: bird could not be created.')
  }
})


//delete record CRUD
app.get('/birds/:slug/del', async (request, response) => {
  try{
    await Bird.findOneAndDelete({slug: request.params.slug })
    response.redirect('/')
  }catch(error){
    response.send("could not delete Record")
    console.log(error)
  }

})


app.get("/welcome/:name", (req, res) => {
  const name = req.params.name;
  res.render("welcome", { name: name, message: `Welcome, ${name}! Hope you enjoy this simple dynamic backend routing` });
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Running on http://localhost:${process.env.PORT}`);
});
