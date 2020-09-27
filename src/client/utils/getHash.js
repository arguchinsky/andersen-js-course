export function getHash() {
  const hash = window.location.hash ? window.location.hash.slice(1).split('/') : '';
  const props = {};
  const [href, ...end] = hash;

  if (end) {
    [props.type, props.id] = end;
  }

  return {
    href,
    props,
  };
}
