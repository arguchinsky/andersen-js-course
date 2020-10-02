/* eslint-disable class-methods-use-this */
import { getHash, clearFormFields } from '../utils';
import { view } from '../view/view';

class Router {
  constructor(appView) {
    this.view = appView;
  }

  start() {
    window.addEventListener('hashchange', this.handleRoutes.bind(this));
    this.handleRoutes();
  }

  handleRoutes() {
    const hash = getHash();

    clearFormFields(this.view.formMovies);
    clearFormFields(this.view.formShows);
    clearFormFields(this.view.formDescription);

    switch (hash.href) {
      case 'movies': {
        this.view.handleShowMovies();
        break;
      }
      case 'shows': {
        this.view.handleShowShows();
        break;
      }
      case 'description': {
        this.view.handleShowDescription();
        break;
      }
      default: {
        break;
      }
    }
  }
}

export const router = new Router(view);
