import { Request, Response } from "express";
import { JournalEntry } from "../types/journal";
import journalModel from "../models/journal.model";

const getEntries = (req: Request, res: Response) => {
    const entries = journalModel.browseEntries()
    if (!entries) {
        res.status(404).json({ message: "No journal entries found" })
        return
    }
    res.status(200).json(entries)
}

const getEntryById = (req: Request, res: Response) => {
    const { id } = req.params
    const entry = journalModel.readEntry(id)
    if (!entry) {
        res.status(404).json({ message: "Journal entry not found" })
        return
    }
    res.status(200).json(entry)
}

const searchEntry = (req: Request<{}, {}, {}, { title: string }>, res: Response) => {
    const { title } = req.query
    const entry = journalModel.searchEntry(title)
    if (!entry) {
        res.status(404).json({ message: "No journal entries found" })
        return
    }
    res.status(200).json(entry)
}

const editEntry = (req: Request<{ id: string }, {}, Partial<JournalEntry>>, res: Response) => {
    const { id } = req.params
    const { title, content, date } = req.body
    const entry = journalModel.editEntry(id, { title, content, date })
    if (!entry) {
        res.status(404).json({ message: "Journal entry not found" })
        return
    }
    res.status(200).json(entry)
}

const addEntry = (req: Request<{}, {}, Omit<JournalEntry, "id">>, res: Response) => {
    const { title, content, date } = req.body
    if (!title || !content || !date) {
        res.status(500).json({ message: "Missing information" })
        return
    }
    const entry = journalModel.addEntry({ title, content, date })
    if (!entry) {
        res.status(409).json({ message: "Journal entry already exists" })
        return
    }
    res.status(200).json(entry)
}

const deleteEntry = (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params
    journalModel.deleteEntry(id)
    res.status(200).json({ message: "Journal entry deleted successfully" })
}

export default {
    getEntries,
    getEntryById,
    searchEntry,
    editEntry,
    addEntry,
    deleteEntry
}
