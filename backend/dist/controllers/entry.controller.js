"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entry_model_1 = __importDefault(require("../models/entry.model"));
const getAll = (req, res) => {
    const entries = entry_model_1.default.getAll();
    res.json(entries);
};
const getById = (req, res) => {
    const { id } = req.params;
    const entry = entry_model_1.default.getById(id);
    if (!entry) {
        res.status(404).json({ message: 'Entry not found' });
        return;
    }
    res.json(entry);
};
const search = (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.status(400).json({ message: 'Query parameter "q" is required' });
        return;
    }
    res.status(200).json(q);
};
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content } = req.body;
    if (!title || !content) {
        res.status(400).json({ message: 'Title and content are required' });
        return;
    }
    const entry = yield entry_model_1.default.create({ title, content });
    console.log(entry);
    if (!entry) {
        res.status(500).json({ message: 'Could not create entry' });
        return;
    }
    res.status(201).json(entry);
});
const update = (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedEntry = entry_model_1.default.update(id, { title, content });
    if (!updatedEntry) {
        res.status(404).json({ message: 'Entry not found' });
        return;
    }
    res.json(updatedEntry);
};
const deletePost = (req, res) => {
    const { id } = req.params;
    const success = entry_model_1.default.delete(id);
    if (!success) {
        res.status(404).json({ message: 'Entry not found' });
        return;
    }
    res.status(204).send();
};
exports.default = {
    getAll,
    getById,
    search,
    create,
    update,
    deletePost
};
