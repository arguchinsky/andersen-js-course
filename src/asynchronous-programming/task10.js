class Musician {
  constructor(albumUrl) {
    this.albumUrl = albumUrl;
  }

  async getAlbums() {
    const response = await fetch(this.albumUrl);
    const albums = await response.json();

    return albums;
  }
}

new Musician('https://jsonplaceholder.typicode.com/albums')
  .getAlbums()
  .then((albums) => console.log(albums));
