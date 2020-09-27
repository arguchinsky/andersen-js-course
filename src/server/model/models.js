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
      description: `Жизнь Томаса Андерсона разделена на две части: днём он - самый обычный офисный работник, получающий нагоняи от начальства, а ночью превращается в хакера по имени Нео, и нет места в сети, куда он не смог бы дотянуться. Но однажды всё меняется — герой, сам того не желая, узнаёт страшную правду: всё, что его окружает — не более, чем иллюзия, Матрица, а люди — всего лишь источник питания для искусственного интеллекта, поработившего человечество. И только Нео под силу изменить расстановку сил в этом чужом и страшном мире.`,
    },
    {
      id: 'blade',
      title: 'The Blade',
      url: 'https://filmix.co/uzhasu/4704-blade.html',
      description: `Получеловек-полувампир Блэйд намерен уничтожить виновника своей судьбы - Дьякона Фроста. Когда-то в кровь Блэйда попало совсем немного вампирского яда, но с течением времени он стал ощущать неизбежность своего превращения.`,
    },
    {
      id: 'spider-man',
      title: 'Spider-man',
      url: 'https://filmix.co/fantastiks/3987-chelovek-pauk.html',
      description: `Питер Паркер – обыкновенный школьник. Однажды он отправился с классом на экскурсию, где его кусает странный паук-мутант. Через время парень почувствовал в себе нечеловеческую силу и ловкость в движении, а главное – умение лазать по стенам и метать стальную паутину. Свои способности он направляет на защиту слабых. Так Питер становится настоящим супергероем по имени Человек-паук, который помогает людям и борется с преступностью. Но там, где есть супергерой, рано или поздно всегда объявляется и суперзлодей...`,
    },
  ],
  shows: [
    {
      id: 'friends',
      title: 'Friends',
      url: 'http://seasonvar.ru/serial-394-Druz_ya-01-sezon.html',
      description: 'empty',
    },
    {
      id: 'scrubs',
      title: 'Scrubs',
      url: 'http://seasonvar.ru/serial-247-Klinika-1-season.html',
      description: 'empty',
    },
    {
      id: 'the-mentalist',
      title: 'The Mentalist',
      url: 'http://seasonvar.ru/serial-106-Mentalist.html',
      description: 'empty',
    },
  ],
};
