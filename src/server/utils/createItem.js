export function createItem({ id, title, url, description = 'empty' }) {
  return {
    id,
    title,
    url,
    description,
  };
}
