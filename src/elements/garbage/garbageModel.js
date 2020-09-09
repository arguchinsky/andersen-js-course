import { initialGarbageState } from '../../utils';

export class GarbageModel {
  constructor(initialState = initialGarbageState) {
    this.state = initialState;
  }

  addItem(item) {
    this.state.push(item);

    return [...this.state];
  }
}
