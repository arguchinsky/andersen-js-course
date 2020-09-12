import './styles/main.css';
import {
  fooTask1,
  createCb,
  parseJSON,
  success,
  failure,
  delay,
  getData,
  urls,
  getResponsesParallel,
  getResponsesSequence,
  getResponsesSequence2,
  getResolvedPromise,
  fooTask7,
  fooTask8,
  fooTask9,
  Musician,
} from './asynchronous-programming';

console.log('Hi');

console.log('----- TASK 1 -----');
fooTask1(2, createCb('done'));
fooTask1(12, createCb('done'));
console.log('------------------');

console.log('----- TASK 2 -----');
parseJSON('{ "x": 10 }', success, failure);
parseJSON('{x}', success, failure);
console.log('------------------');

(async () => {
  console.log('----- TASK 3 -----');
  await delay(1000).then((value) => console.log(`Done with ${value}`));
  console.log('------------------');

  // TASK 4
  await getData();
  //

  // TASK5
  getResponsesParallel(urls);
  getResponsesSequence(urls);
  getResponsesSequence2(urls);
  //

  console.log('----- TASK 6 -----');
  await getResolvedPromise(500)
    .then((value) => {
      if (value > 300) throw new Error('Ошибка');
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('This is Finally!'));
  console.log('------------------');

  console.log('----- TASK 7 -----');
  await fooTask7();
  console.log('------------------');

  console.log('----- TASK 8 -----');
  await fooTask8('https://jsonplaceholder.typicode.com/users');
  console.log('------------------');

  console.log('----- TASK 9 -----');
  await fooTask9();
  console.log('------------------');

  console.log('----- TASK 10 -----');
  await new Musician('https://jsonplaceholder.typicode.com/albums')
    .getAlbums()
    .then((albums) => console.log(albums));
  console.log('------------------');
})();
