const asyncBar = async () => 'Some string!';

const foo = async () => {
  console.log(await asyncBar());
};

foo();
