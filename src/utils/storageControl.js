export const storage = {
  save(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  },

  load(name) {
    return JSON.parse(localStorage.getItem(name));
  },
};
