/* eslint-disable no-console */
import { EVENTS, URLS, getUrl } from '../utils';
import { View } from '../view/view';

class Application {
  constructor(appView) {
    this.view = appView;

    appView.subscribe(EVENTS.GET_MOVIES, this.getMovies.bind(this));
    appView.subscribe(EVENTS.GET_SHOWS, this.getShows.bind(this));
    appView.subscribe(EVENTS.GET_ITEM, this.getItem.bind(this));
    appView.subscribe(EVENTS.ADD_MOVIE, this.addMovie.bind(this));
    appView.subscribe(EVENTS.ADD_SHOW, this.addShow.bind(this));
    appView.subscribe(EVENTS.REMOVE, this.removeItem.bind(this));
  }

  async start() {
    this.view.handleRoutes();
  }

  async getMovies() {
    const response = await window.fetch(URLS.MOVIES);
    const moviesList = await response.json();

    this.view.showMovies(moviesList);
  }

  async getShows() {
    const response = await window.fetch(URLS.SHOWS);
    const showsList = await response.json();

    this.view.showTvShows(showsList);
  }

  async getItem(props) {
    const url = getUrl(props);

    const response = await window.fetch(url);
    const item = await response.json();

    this.view.showItemDescription(item);
  }

  async addMovie(props) {
    try {
      const response = await window.fetch(URLS.MOVIES, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(props),
      });
      const movies = await response.json();
      this.view.showMovies(movies);
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  async addShow(props) {
    try {
      const response = await window.fetch(URLS.SHOWS, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(props),
      });
      const movies = await response.json();
      this.view.showTvShows(movies);
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  async removeItem(props) {
    try {
      const url = getUrl(props);

      await window.fetch(url, {
        method: 'DELETE',
      });

      switch (props.type) {
        case 'movies': {
          this.view.handleShowMovies();
          break;
        }
        case 'shows': {
          this.view.handleShowShows();
          break;
        }
        default:
          break;
      }
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

export const application = new Application(new View());
