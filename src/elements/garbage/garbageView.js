import { createElement, createItemsCollection } from '../../utils';

export class GarbageView {
  constructor(state = []) {
    this.garbage = document.getElementById('garbage');

    this.render(state);
  }

  render(state) {
    const garbageListItems = createItemsCollection(state);
    const newGarbageList = createElement({ className: 'garbage-list' }, 'ul', ...garbageListItems);

    this.garbage.querySelector('.garbage-list').remove();
    this.garbage.append(newGarbageList);
  }

  updateView(newState) {
    this.render(newState);
  }
}
