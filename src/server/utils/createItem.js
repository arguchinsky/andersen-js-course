function convertTitleToId(title) {
  return title.toLowerCase().split(' ').join('-');
}

export function createItem({ title, url, description = 'empty' }) {
  return {
    id: convertTitleToId(title),
    title,
    url,
    description,
  };
}
