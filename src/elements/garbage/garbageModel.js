import { initialGarbageState, storage } from '../../utils';

export class GarbageModel {
  constructor(initialState) {
    this.state = initialState ?? initialGarbageState;

    this.saveState();
  }

  addItem(item) {
    this.state.push(item);

    this.saveState();
    return [...this.state];
  }

  getItem(id) {
    return this.state.find((el) => el.dataId === id);
  }

  saveState() {
    storage.save('garbage-state', this.state);
  }
}
