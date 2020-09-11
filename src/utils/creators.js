export function createItem(
  { title = 'Empty', dataId = 'empty', className, dataType = 'empty', draggable = false },
  tag = 'li'
) {
  const element = document.createElement(tag);

  element.className = className;
  element.setAttribute('data-id', dataId);
  element.setAttribute('data-type', dataType);
  element.setAttribute('draggable', draggable);
  element.textContent = title;

  return element;
}

export function createList(className, ...children) {
  const element = document.createElement('ul');

  element.className = className;
  element.append(...children);

  return element;
}

export function createItemsCollection(objects) {
  return objects.map((el) => createItem(el));
}
