const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, ms);
  });

delay(1000).then((value) => console.log(`Done with ${value}`));
