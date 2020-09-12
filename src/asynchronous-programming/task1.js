const createCb = (str) => () => console.log(str);

function foo(x, cb) {
  if (x <= 10) {
    console.log('x <= 10');
  } else {
    console.log('x > 10');
    cb();
  }
}

foo(2, createCb('done'));
foo(12, createCb('done'));
