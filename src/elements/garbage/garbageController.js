export class GarbageController {
  constructor(model, view) {
    this.garbageModel = model;
    this.garbageView = view;
  }

  addItem(item) {
    const state = this.garbageModel.addItem(item);

    this.garbageView.updateView(state);
  }
}
