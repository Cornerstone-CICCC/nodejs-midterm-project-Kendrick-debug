import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../types/entry';

class EntryModel {
  private entries: Entry[] = [];

  getAll() {
    return this.entries;
  }

  getById(id: string) {
    const entryIndexFound = this.entries.findIndex(entry => entry.id === id)
    if(entryIndexFound === -1){
      console.log("here")
      return "Entry not found"
    }
    console.log(this.entries[entryIndexFound])
    return this.entries[entryIndexFound]
  }

  search(keyword: string) {
    return this.entries.filter(entry =>
      entry.title.includes(keyword) || entry.content.includes(keyword)
    );
  }

   async create(newEntry: Omit<Entry, 'id'>) {
        const {title, content} = newEntry
        const foundEntry = this.entries.find(e => e.title === title)
        if (foundEntry) return false
        const entry = {
          id: uuidv4(),
          title,
          content,
        }
        this.entries.push(entry)
        return entry

  }

  update(id: string, updatedEntry: Partial<Omit<Entry, 'id' | 'createdAt'>>) {
    const entry = this.getById(id);
    if (!entry) return null;
    Object.assign(entry, updatedEntry, { updatedAt: new Date() });
    return entry;
  }

  delete(id: string) {
    const index = this.entries.findIndex(entry => entry.id === id);
    if (index === -1) return false;
    this.entries.splice(index, 1);
    return true;
  }
}

export default new EntryModel();