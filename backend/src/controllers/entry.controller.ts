import { Request, Response } from 'express';
import EntryModel from '../models/entry.model';


  const getAll = (req: Request, res: Response) => {
    const entries = EntryModel.getAll();
    res.json(entries);
  }

  const getById = (req: Request<{id: string}>, res: Response) => {
    const { id } = req.params;
    const entry = EntryModel.getById(id);
    if (!entry) {
      res.status(404).json({ message: 'Entry not found' });
      return
    }
    res.json(entry);
  }

  const search= (req: Request<{id: string}>, res: Response) => {
    const { q } = req.query;
    if (!q) {
      res.status(400).json({ message: 'Query parameter "q" is required' });
      return
    } 
    res.status(200).json(q);
  }

  const create= async(req: Request, res: Response) => {
    const { title, content } = req.body;
    if (!title || !content) {
      res.status(400).json({ message: 'Title and content are required' });
      return
    }
    
    const entry = await EntryModel.create({ title, content });
    console.log(entry)
    if (!entry) {
      res.status(500).json({ message: 'Could not create entry' });
      return
    }
      
    res.status(201).json(entry);
  
}

  const update= (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedEntry = EntryModel.update(id, { title, content });
    if (!updatedEntry) {
      res.status(404).json({ message: 'Entry not found' });
      return 
    }
   
    res.json(updatedEntry);
  }

  const deletePost = (req: Request, res: Response) => {
    const { id } = req.params;
    const success = EntryModel.delete(id);
    if (!success) {
      res.status(404).json({ message: 'Entry not found' });
      return
    } 
     
    res.status(204).send();
  }

  export default {
    getAll,
    getById,
    search,
    create,
    update,
    deletePost
  }
