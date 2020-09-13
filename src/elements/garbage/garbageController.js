import { GarbageModel } from './garbageModel';
import { GarbageView } from './garbageView';

const model = new GarbageModel();
const view = new GarbageView(model.state);

export class GarbageController {
  constructor() {
    this.model = model;
    this.view = view;

    this.view.render(this.model.state);

    view.subscribe('garbageDrag', this.getItem.bind(this));
  }

  addItem(item) {
    const state = this.garbageModel.addItem(item);

    this.garbageView.updateView(state);
  }

  getItem({
    dataTransfer,
    target: {
      dataset: { id },
    },
  }) {
    this.view.dragItem(dataTransfer, this.model.getItem(id));
  }
}
