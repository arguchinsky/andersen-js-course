/* eslint-disable no-console */
import { EVENTS, URLS } from '../utils';
import { View } from '../view/view';

class Application {
  constructor(appView) {
    this.view = appView;

    appView.subscribe(EVENTS.GET_MOVIES, this.getMovies.bind(this));
    appView.subscribe(EVENTS.GET_SHOWS, this.getShows.bind(this));
    appView.subscribe(EVENTS.GET_ITEM, this.getItem.bind(this));
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

  async getItem({ type, id }) {
    const url = `${URLS[type.toUpperCase()]}/${id}`;

    const response = await window.fetch(url);
    const item = await response.json();

    this.view.showItemDescription(item);
  }
}

export const application = new Application(new View());
