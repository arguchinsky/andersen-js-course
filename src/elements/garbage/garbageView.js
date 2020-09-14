/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
import { createList, createItemsCollection, getElementById, EventEmitter } from '../../utils';

export class GarbageView extends EventEmitter {
  constructor() {
    super();

    this.garbage = getElementById('garbage');
    this.refreshGarbageButton = getElementById('refreshGarbageButton');

    this.garbage.addEventListener('dragstart', this.handleDrag.bind(this));
    this.refreshGarbageButton.addEventListener('click', this.handleRefreshGarbage.bind(this));
  }

  render(state) {
    const newGarbageList = createList('garbage-list', ...createItemsCollection(state));

    this.garbage.querySelector('.garbage-list').remove();
    this.garbage.append(newGarbageList);
  }

  dragItem(dataTransfer, item) {
    const ingredient = { ...item, draggable: false };
    dataTransfer.setData('ingredient', JSON.stringify(ingredient));
  }

  handleDrag(event) {
    this.emit('garbageDrag', event);
  }

  handleRefreshGarbage() {
    this.emit('refreshGarbage');
  }
}
