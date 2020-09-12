const getResolvedPromise = (value) => Promise.resolve(value);

getResolvedPromise(500)
  .then((value) => {
    if (value > 300) throw new Error('Ошибка');
  })
  .catch((error) => console.log(error))
  .finally(() => console.log('This is Finally!'));
