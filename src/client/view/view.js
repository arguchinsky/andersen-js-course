/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import { EventEmitter, getElementById, BUTTONS, EVENTS } from '../utils';

export class View extends EventEmitter {
  constructor() {
    super();

    this.moviesList = [];
    this.showsList = [];

    this.loadMovies = getElementById(BUTTONS.MOVIES_BTN);
    this.loadShows = getElementById(BUTTONS.SHOWS_BTN);
    this.movies = getElementById('movies');
    this.shows = getElementById('shows');

    this.addListeners();
  }

  addListeners() {
    this.loadMovies.addEventListener('click', this.handleShowMovies.bind(this));
    this.loadShows.addEventListener('click', this.handleShowTvShows.bind(this));
  }

  handleShowMovies() {
    this.movies.classList.remove('hide');
    this.shows.classList.add('hide');

    this.loadMovies.classList.add('active');
    this.loadShows.classList.remove('active');

    this.emit(EVENTS.GET_MOVIES);
  }

  handleShowTvShows() {
    this.shows.classList.remove('hide');
    this.movies.classList.add('hide');

    this.loadShows.classList.add('active');
    this.loadMovies.classList.remove('active');

    this.emit(EVENTS.GET_SHOWS);
  }

  showMovies(list) {
    console.log(list);
  }

  showTvShows(list) {
    console.log(list);
  }
}
