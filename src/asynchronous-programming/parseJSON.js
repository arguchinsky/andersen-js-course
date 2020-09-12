const success = (str) => {
  console.log('Success parse!');
  console.log(str);
};
const failure = (err) => {
  console.log('Failure parse!');
  console.log(err);
};

function parseJSON(jsonStr, successCb, failureCb) {
  try {
    const json = JSON.parse(jsonStr);
    successCb(json);
  } catch (error) {
    failureCb(error);
  }
}

parseJSON('{ "x": 10 }', success, failure);
parseJSON('{x}', success, failure);
