/* eslint-disable no-param-reassign */
export function refreshFormFields(form) {
  Array.from(form.elements).forEach((item) => {
    item.value = '';
  });
}
