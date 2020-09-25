// import mongoose from 'mongoose';

// const itemScheme = new mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   url: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//   },
// });

// const Movies = mongoose.model('Movies', itemScheme);
// const Shows = mongoose.model('Shows', itemScheme);

// export const models = { Movies, Shows };

export const models = {
  movies: [
    {
      id: 'matrix',
      title: 'The Matrix',
      url: 'https://filmix.co/fantastiks/1113-smotret-onlajn-matrica-1999.html',
    },
    {
      id: 'blade',
      title: 'The Blade',
      url: 'https://filmix.co/uzhasu/4704-blade.html',
    },
    {
      id: 'spider-man',
      title: 'Spider-man',
      url: 'https://filmix.co/fantastiks/3987-chelovek-pauk.html',
    },
  ],
  shows: [
    {
      id: 'friends',
      title: 'Friends',
      url: 'http://seasonvar.ru/serial-394-Druz_ya-01-sezon.html',
    },
    {
      id: 'scrubs',
      title: 'Scrubs',
      url: 'http://seasonvar.ru/serial-247-Klinika-1-season.html',
    },
    {
      id: 'the-mentalist',
      title: 'The Mentalist',
      url: 'http://seasonvar.ru/serial-106-Mentalist.html',
    },
  ],
};
