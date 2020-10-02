export function setHash({ type }) {
  window.location.hash = `#${type}`;
}
