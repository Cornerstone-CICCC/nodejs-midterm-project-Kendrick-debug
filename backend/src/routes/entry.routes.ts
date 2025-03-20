import { Router } from 'express';
import entryController from '../controllers/entry.controller';
import { checkLoggedIn } from '../middleware/auth.middleware';

const entryRouter = Router();

entryRouter.get('/posts', entryController.getAll);
entryRouter.get('/posts/search', entryController.search);
entryRouter.post('/posts',  entryController.create);
entryRouter.get('/post/:id', entryController.getById);
entryRouter.put('/posts/:id', entryController.update);
entryRouter.delete('/posts/:id', entryController.deletePost);

export default entryRouter;
