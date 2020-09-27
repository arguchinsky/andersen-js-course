export function firstLetterUpper(word) {
  return word ? word.slice(0, 1).toUpperCase() + word.slice(1) : '';
}
