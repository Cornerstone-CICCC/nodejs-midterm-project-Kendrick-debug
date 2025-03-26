import { Router } from "express";
import journalController from "../controllers/journal.controller";

const journalRouter = Router()



// Browse
journalRouter.get('/', journalController.getEntries)
// Search
journalRouter.get('/search', journalController.searchEntry)
// Read
journalRouter.get('/:id', journalController.getEntryById)
// Edit
journalRouter.put('/:id', journalController.editEntry)
// Add
journalRouter.post('/', journalController.addEntry)
// Delete
journalRouter.delete('/:id', journalController.deleteEntry)

// // Browse
// journalRouter.get('/', checkLoggedIn, journalController.getEntries)
// // Search
// journalRouter.get('/search', checkLoggedIn, journalController.searchEntry)
// // Read
// journalRouter.get('/:id', checkLoggedIn, journalController.getEntryById)
// // Edit
// journalRouter.put('/:id', checkLoggedIn, journalController.editEntry)
// // Add
// journalRouter.post('/', checkLoggedIn, journalController.addEntry)
// // Delete
// journalRouter.delete('/:id', checkLoggedIn, journalController.deleteEntry)

export default journalRouter
