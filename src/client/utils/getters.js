import { URLS } from './constants';

export function getElementById(id) {
  return document.getElementById(id);
}

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

export function getPropsFormFields(form) {
  const [title, url, formDesc] = Object.values(form.elements).map((item) => item.value);

  return {
    title,
    url,
    description: formDesc,
  };
}

export function getUrl({ type, id }) {
  return `${URLS[type.toUpperCase()]}/${id}`;
}
