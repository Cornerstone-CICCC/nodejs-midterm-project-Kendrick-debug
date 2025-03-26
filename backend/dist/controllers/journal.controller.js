"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const journal_model_1 = __importDefault(require("../models/journal.model"));
const getEntries = (req, res) => {
    const entries = journal_model_1.default.browseEntries();
    if (!entries) {
        res.status(404).json({ message: "No journal entries found" });
        return;
    }
    res.status(200).json(entries);
};
const getEntryById = (req, res) => {
    const { id } = req.params;
    const entry = journal_model_1.default.readEntry(id);
    if (!entry) {
        res.status(404).json({ message: "Journal entry not found" });
        return;
    }
    res.status(200).json(entry);
};
const searchEntry = (req, res) => {
    const { title } = req.query;
    const entry = journal_model_1.default.searchEntry(title);
    if (!entry) {
        res.status(404).json({ message: "No journal entries found" });
        return;
    }
    res.status(200).json(entry);
};
const editEntry = (req, res) => {
    const { id } = req.params;
    const { title, content, date } = req.body;
    const entry = journal_model_1.default.editEntry(id, { title, content, date });
    if (!entry) {
        res.status(404).json({ message: "Journal entry not found" });
        return;
    }
    res.status(200).json(entry);
};
const addEntry = (req, res) => {
    const { title, content, date } = req.body;
    if (!title || !content || !date) {
        res.status(500).json({ message: "Missing information" });
        return;
    }
    const entry = journal_model_1.default.addEntry({ title, content, date });
    if (!entry) {
        res.status(409).json({ message: "Journal entry already exists" });
        return;
    }
    res.status(200).json(entry);
};
const deleteEntry = (req, res) => {
    const { id } = req.params;
    journal_model_1.default.deleteEntry(id);
    res.status(200).json({ message: "Journal entry deleted successfully" });
};
exports.default = {
    getEntries,
    getEntryById,
    searchEntry,
    editEntry,
    addEntry,
    deleteEntry
};
