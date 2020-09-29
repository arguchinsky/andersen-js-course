export function createItem({ title, _id }, type) {
  const item = document.createElement('li');
  const link = document.createElement('a');

  item.classList.add('list-group-item');

  link.classList.add('nav-link');
  link.id = _id;
  link.setAttribute('href', `#description/${type}/${link.id}`);
  link.textContent = title.slice(0, 1).toUpperCase() + title.slice(1);

  item.append(link);

  return item;
}

export function createList(collection, type) {
  const list = document.createElement('ul');

  list.classList.add('list-group');
  list.classList.add('col-8');

  list.append(...collection.map((item) => createItem(item, type)));

  return list;
}

export function createDescription({ title, description }) {
  const viewTitle = document.createElement('h4');
  const viewDescription = document.createElement('p');

  viewTitle.textContent = title;

  viewDescription.textContent =
    description !== 'empty' ? description : `Sorry description is empty`;

  return [viewTitle, viewDescription];
}
