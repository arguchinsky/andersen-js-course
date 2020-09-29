export function switchHash({ type }) {
  window.location.hash = `#${type}`;
}
