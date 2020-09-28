/* eslint-disable class-methods-use-this */
import {
  EventEmitter,
  getElementById,
  BUTTONS,
  EVENTS,
  FORMS,
  createList,
  createDescription,
  getHash,
  getFormFieldsValues,
  refreshFormFields,
} from '../utils';

export class View extends EventEmitter {
  constructor() {
    super();

    this.getElements();
    this.addListeners();
  }

  getElements() {
    // buttons
    this.loadMovies = getElementById(BUTTONS.MOVIES_BTN);
    this.loadShows = getElementById(BUTTONS.SHOWS_BTN);
    this.watchButton = getElementById(BUTTONS.WATCH_BTN);
    this.removeButton = getElementById(BUTTONS.REMOVE_BTN);
    // forms
    this.formMovies = getElementById(FORMS.MOVIES_FORM);
    this.formShows = getElementById(FORMS.SHOWS_FORM);
    this.formDescription = getElementById(FORMS.DESCRIPTION_FORM);
    // lists sections
    this.movies = getElementById('movies');
    this.shows = getElementById('shows');
    // lists
    this.moviesList = getElementById('moviesList');
    this.showsList = getElementById('showsList');
    // description
    this.description = getElementById('description');
    this.descriptionField = getElementById('descriptionField');
  }

  addListeners() {
    window.addEventListener('hashchange', this.handleRoutes.bind(this));

    this.loadMovies.addEventListener('click', this.handleShowMovies.bind(this));
    this.loadShows.addEventListener('click', this.handleShowShows.bind(this));

    this.formMovies.addEventListener('submit', this.handleMoviesFormSubmit.bind(this));
    this.formShows.addEventListener('submit', this.handleShowsFormSubmit.bind(this));

    this.removeButton.addEventListener('click', this.handleRemove.bind(this));
    // disabled for the test

    // this.moviesList.addEventListener('click', this.handleShowDescription.bind(this));
    // this.showsList.addEventListener('click', this.handleShowDescription.bind(this));
  }

  handleRoutes() {
    const hash = getHash();

    switch (hash.href) {
      case 'movies': {
        this.handleShowMovies();
        break;
      }
      case 'shows': {
        this.handleShowShows();
        break;
      }
      case 'description': {
        this.handleShowDescription();
        break;
      }
      default: {
        break;
      }
    }
  }

  // render methods

  showMovies(list) {
    this.moviesList.querySelector('ul').remove();
    this.moviesList.prepend(createList(list, 'movies'));
  }

  showTvShows(list) {
    this.showsList.querySelector('ul').remove();
    this.showsList.prepend(createList(list, 'shows'));
  }

  showItemDescription(item) {
    this.descriptionField.querySelector('h4').remove();
    this.descriptionField.querySelector('p').remove();
    this.descriptionField.prepend(...createDescription(item));

    this.watchButton.setAttribute('href', item.url);
    this.watchButton.setAttribute('target', 'blank');
  }

  // handle methods

  handleShowMovies() {
    this.movies.classList.remove('hide');
    this.shows.classList.add('hide');
    this.description.classList.add('hide');

    this.loadMovies.classList.add('active');
    this.loadShows.classList.remove('active');

    this.emit(EVENTS.GET_MOVIES);
  }

  handleShowShows() {
    this.shows.classList.remove('hide');
    this.movies.classList.add('hide');
    this.description.classList.add('hide');

    this.loadShows.classList.add('active');
    this.loadMovies.classList.remove('active');

    this.emit(EVENTS.GET_SHOWS);
  }

  handleShowDescription() {
    const { props } = getHash();

    this.shows.classList.add('hide');
    this.movies.classList.add('hide');
    this.loadShows.classList.remove('active');
    this.loadMovies.classList.remove('active');

    this.description.classList.remove('hide');

    this.emit(EVENTS.GET_ITEM, props);
  }

  // handle forms methods

  handleMoviesFormSubmit(event) {
    event.preventDefault();
    const props = getFormFieldsValues(this.formMovies);

    refreshFormFields(this.formMovies);
    this.emit(EVENTS.ADD_MOVIE, props);
  }

  handleShowsFormSubmit(event) {
    event.preventDefault();
    const props = getFormFieldsValues(this.formShows);

    refreshFormFields(this.formShows);
    this.emit(EVENTS.ADD_SHOW, props);
  }

  handleRemove() {
    const { props } = getHash();

    this.emit(EVENTS.REMOVE, props);
  }
}
