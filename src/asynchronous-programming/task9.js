const asyncBar = async () => 'Some string!';

export const fooTask9 = async () => {
  console.log(await asyncBar());
};
