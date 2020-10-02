/* eslint-disable no-param-reassign */
export function clearFormFields(form) {
  Array.from(form.elements).forEach((item) => {
    item.value = '';
  });
}
