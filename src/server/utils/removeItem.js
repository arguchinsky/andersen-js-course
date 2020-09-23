export function removeItem(collection, id) {
  return collection.filter((item) => item.id !== id);
}
