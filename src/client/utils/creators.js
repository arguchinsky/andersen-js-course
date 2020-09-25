export function createList() {
  const list = document.createElement('ul');

  list.classList.add('list-group');
  list.classList.add('col-8');

  return list;
}

export function createItem({ title }) {
  const item = document.createElement('li');
  const link = document.createElement('a');

  item.classList.add('list-group-item');

  link.classList.add('nav-link');
  link.textContent = title.slice(0, 1).toUpperCase() + title.slice(1);

  item.append(link);

  return item;
}
