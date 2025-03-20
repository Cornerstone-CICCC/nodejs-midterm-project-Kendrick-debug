"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entry_controller_1 = __importDefault(require("../controllers/entry.controller"));
const entryRouter = (0, express_1.Router)();
entryRouter.get('/posts', entry_controller_1.default.getAll);
entryRouter.get('/posts/search', entry_controller_1.default.search);
entryRouter.post('/posts', entry_controller_1.default.create);
entryRouter.get('/post/:id', entry_controller_1.default.getById);
entryRouter.put('/posts/:id', entry_controller_1.default.update);
entryRouter.delete('/posts/:id', entry_controller_1.default.deletePost);
exports.default = entryRouter;
