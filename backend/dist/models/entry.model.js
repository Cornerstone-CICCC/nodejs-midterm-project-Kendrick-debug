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
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class EntryModel {
    constructor() {
        this.entries = [];
    }
    getAll() {
        return this.entries;
    }
    getById(id) {
        const entryIndexFound = this.entries.findIndex(entry => entry.id === id);
        if (entryIndexFound === -1) {
            console.log("here");
            return "Entry not found";
        }
        console.log(this.entries[entryIndexFound]);
        return this.entries[entryIndexFound];
    }
    search(keyword) {
        return this.entries.filter(entry => entry.title.includes(keyword) || entry.content.includes(keyword));
    }
    create(newEntry) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, content } = newEntry;
            const foundEntry = this.entries.find(e => e.title === title);
            if (foundEntry)
                return false;
            const entry = {
                id: (0, uuid_1.v4)(),
                title,
                content,
            };
            this.entries.push(entry);
            return entry;
        });
    }
    update(id, updatedEntry) {
        const entry = this.getById(id);
        if (!entry)
            return null;
        Object.assign(entry, updatedEntry, { updatedAt: new Date() });
        return entry;
    }
    delete(id) {
        const index = this.entries.findIndex(entry => entry.id === id);
        if (index === -1)
            return false;
        this.entries.splice(index, 1);
        return true;
    }
}
exports.default = new EntryModel();
