import { EVENTS, URLS } from '../constants';
import { getUrl } from '../utils';
import { request } from '../request/request';
import { view } from '../view/view';

class Application {
  constructor(appView, requestService) {
    this.view = appView;
    this.request = requestService;

    this.subscriptions(appView);
  }

  subscriptions(subscriber) {
    subscriber.subscribe(EVENTS.GET_MOVIES, this.getMovies.bind(this));
    subscriber.subscribe(EVENTS.GET_SHOWS, this.getShows.bind(this));
    subscriber.subscribe(EVENTS.GET_ITEM, this.getItem.bind(this));
    subscriber.subscribe(EVENTS.ADD_MOVIE, this.addMovie.bind(this));
    subscriber.subscribe(EVENTS.ADD_SHOW, this.addShow.bind(this));
    subscriber.subscribe(EVENTS.REMOVE, this.removeItem.bind(this));
    subscriber.subscribe(EVENTS.EDIT, this.editItem.bind(this));
  }

  start() {
    this.view.handleRoutes();
  }

  // helpers
  refreshList(type) {
    switch (type) {
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
  }

  async getMovies() {
    const data = await this.request.get(URLS.MOVIES);

    this.view.showMovies(data);
  }

  async getShows() {
    const data = await this.request.get(URLS.SHOWS);

    this.view.showTvShows(data);
  }

  async getItem(props) {
    const url = getUrl(props);

    const data = await this.request.get(url);

    this.view.showItemDescription(data);
  }

  async addMovie(props) {
    try {
      const data = await this.request.post(URLS.MOVIES, props);
      this.view.showMovies(data);
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  async addShow(props) {
    try {
      const data = await this.request.post(URLS.SHOWS, props);
      this.view.showTvShows(data);
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  async editItem(item) {
    const url = getUrl(item.props);
    try {
      const data = await this.request.edit(url, item);
      this.view.showItemDescription(data);
    } catch ({ message }) {
      throw new Error(message);
    }
  }

  async removeItem(item) {
    try {
      const url = getUrl(item);

      this.request.delete(url);
      this.refreshList(item.type);
    } catch ({ message }) {
      throw new Error(message);
    }
  }
}

export const application = new Application(view, request);
