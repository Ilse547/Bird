import { Router } from 'express'
import { Bird } from '../models/Bird.js';

const router = Router()



//make a new bird entry C
router.get('/birds/new', (request, response) => {
    response.render('birds/new');
  });
  
router.post('/birds', async (request, response) => {
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
router.get('/', async (request, response) => {
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

router.get('/birds/:slug', async (request, response) => {
  try {
      const slug = request.params.slug;
      const bird = await Bird.findOne({ slug: slug }).exec();

      if (!bird) {
          return response.status(404).send('bird entry not found');
      }

      response.render('birds/show', { bird: bird });
  } catch (error) {
      console.error(error);
      response.status(500).send('there was an error');
  }
});


  
//edit a bird entry CRU
router.get('/birds/:slug/edit', async (request, response) => {
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
  
router.post('/birds/:slug', async (request, response) => {
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
  router.get('/birds/:slug/del', async (request, response) => {
    try{
      await Bird.findOneAndDelete({slug: request.params.slug })
      response.redirect('/')
    }catch(error){
      response.send("could not delete Record")
      console.log(error)
    }
  
})
export default router