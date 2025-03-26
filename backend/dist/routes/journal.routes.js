"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const journal_controller_1 = __importDefault(require("../controllers/journal.controller"));
const journalRouter = (0, express_1.Router)();
// Browse
journalRouter.get('/', journal_controller_1.default.getEntries);
// Search
journalRouter.get('/search', journal_controller_1.default.searchEntry);
// Read
journalRouter.get('/:id', journal_controller_1.default.getEntryById);
// Edit
journalRouter.put('/:id', journal_controller_1.default.editEntry);
// Add
journalRouter.post('/', journal_controller_1.default.addEntry);
// Delete
journalRouter.delete('/:id', journal_controller_1.default.deleteEntry);
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
exports.default = journalRouter;
