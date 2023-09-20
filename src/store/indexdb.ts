import Dexie, { Table } from "dexie";
export default class Store<State> extends Dexie {
  items!: Table<State>;
  db: { items: any };
  constructor(name: string, version: number, options: { items: string }) {
    super(name)
    this.db = new Dexie(name);
    this.db.version(version).stores(options)
  }
  add(data: Partial<State> & { createGMT?: number }) {
    data.createGMT = new Date().getTime();
    return this.db.items.add(data);
  }
  queryAll() {
    return this.db.items.toArray();
  }
  query(field: string, between?: [number, number]) {
    if (between) {
      return this.db.items.where(field).between(between).toArray();
    }
    return this.db.items.where(field).toArray()
  }
  update(id: number, data: Partial<State>) {
    this.db.items.update(id, data)
  }
  deleteItem(id: number) {
    return this.db.items.delete(id)
  }
}