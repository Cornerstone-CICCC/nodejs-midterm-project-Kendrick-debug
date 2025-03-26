"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class JournalModel {
    constructor() {
        this.entries = [];
    }
    searchEntry(query) {
        const foundEntries = this.entries.filter(e => e.title.toLowerCase().includes(query.toLowerCase()));
        if (foundEntries.length === 0)
            return false;
        return foundEntries;
    }
    browseEntries() {
        return this.entries;
    }
    readEntry(id) {
        const foundEntry = this.entries.find(e => e.id === id);
        if (!foundEntry)
            return false;
        return foundEntry;
    }
    editEntry(id, update) {
        var _a, _b, _c;
        const foundEntry = this.entries.findIndex(e => e.id === id);
        if (foundEntry === -1)
            return false;
        const updatedEntry = Object.assign(Object.assign({}, this.entries[foundEntry]), { title: (_a = update.title) !== null && _a !== void 0 ? _a : this.entries[foundEntry].title, content: (_b = update.content) !== null && _b !== void 0 ? _b : this.entries[foundEntry].content, date: (_c = update.date) !== null && _c !== void 0 ? _c : this.entries[foundEntry].date });
        this.entries[foundEntry] = updatedEntry;
        return updatedEntry;
    }
    addEntry(newEntry) {
        const { title, content, date } = newEntry;
        const foundEntry = this.entries.find(e => e.title === title);
        if (foundEntry)
            return false;
        const entry = {
            id: (0, uuid_1.v4)(),
            title,
            content,
            date
        };
        this.entries.push(entry);
        return entry;
    }
    deleteEntry(id) {
        const foundEntry = this.entries.findIndex(e => e.id === id);
        if (foundEntry === -1)
            return false;
        this.entries.splice(foundEntry, 1);
    }
}
exports.default = new JournalModel;
