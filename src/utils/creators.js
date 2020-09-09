export function createElement(
  { title = 'Empty', dataId = 'empty', className, dataType = 'empty', draggable = false },
  tag = 'li',
  ...children
) {
  const element = document.createElement(tag);

  element.className = className;
  element.setAttribute('data-id', dataId);
  element.setAttribute('data-type', dataType);
  element.setAttribute('draggable', draggable);
  if (children.length > 0) {
    element.append(...children);
  } else {
    element.textContent = title;
  }

  return element;
}

export function createItemsCollection(objects) {
  return objects.map(el => createElement(el));
}
