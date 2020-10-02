class Request {
  constructor() {
    this.data = null;
  }

  async get(url) {
    const response = await window.fetch(url);
    this.data = await response.json();

    return this.data;
  }

  async post(url, obj) {
    const response = await window.fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    this.data = await response.json();
    return this.data;
  }

  async edit(url, obj) {
    const response = await window.fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    this.data = await response.json();

    return this.data;
  }

  async delete(url) {
    await window.fetch(url, {
      method: 'DELETE',
    });
    this.data = null;
  }
}

export const request = new Request();
