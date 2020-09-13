import { GarbageModel } from './garbageModel';
import { GarbageView } from './garbageView';

const model = new GarbageModel();
const view = new GarbageView(model.state);

export class GarbageController {
  constructor() {
    this.garbageModel = model;
    this.garbageView = view;
  }

  addItem(item) {
    const state = this.garbageModel.addItem(item);

    this.garbageView.updateView(state);
  }
}
