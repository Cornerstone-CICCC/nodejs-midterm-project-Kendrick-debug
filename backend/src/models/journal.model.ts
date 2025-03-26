import { v4 as uuidv4 } from "uuid";
import { JournalEntry } from "../types/journal";

class JournalModel {
    private entries: JournalEntry[] = []

    searchEntry(query: string) {
        const foundEntries = this.entries.filter(e => e.title.toLowerCase().includes(query.toLowerCase()))
        if (foundEntries.length === 0) return false
        return foundEntries
    }

    browseEntries() {
        return this.entries
    }

    readEntry(id: string) {
        const foundEntry = this.entries.find(e => e.id === id)
        if (!foundEntry) return false
        return foundEntry
    }

    editEntry(id: string, update: Partial<JournalEntry>) {
        const foundEntry = this.entries.findIndex(e => e.id === id)
        if (foundEntry === -1) return false
        const updatedEntry = {
            ...this.entries[foundEntry],
            title: update.title ?? this.entries[foundEntry].title,
            content: update.content ?? this.entries[foundEntry].content,
            date: update.date ?? this.entries[foundEntry].date
        }
        this.entries[foundEntry] = updatedEntry
        return updatedEntry
    }

    addEntry(newEntry: Omit<JournalEntry, "id">) {
        const { title, content, date } = newEntry
        const foundEntry = this.entries.find(e => e.title === title)
        if (foundEntry) return false
        const entry = {
            id: uuidv4(),
            title,
            content,
            date
        }
        this.entries.push(entry)
        return entry
    }

    deleteEntry(id: string) {
        const foundEntry = this.entries.findIndex(e => e.id === id)
        if (foundEntry === -1) return false
        this.entries.splice(foundEntry, 1)
    }
}

export default new JournalModel
