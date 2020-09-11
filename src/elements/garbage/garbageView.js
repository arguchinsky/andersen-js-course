import { createList, createItemsCollection, getElementById } from '../../utils';

export class GarbageView {
  constructor(state = []) {
    this.garbage = getElementById('garbage');

    this.render(state);
  }

  render(state) {
    const newGarbageList = createList('garbage-list', ...createItemsCollection(state));

    this.garbage.querySelector('.garbage-list').remove();
    this.garbage.append(newGarbageList);
  }

  updateView(newState) {
    this.render(newState);
  }
}
