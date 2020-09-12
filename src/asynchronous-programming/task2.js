export const success = (str) => {
  console.log('Success parse!');
  console.log(str);
};
export const failure = (err) => {
  console.log('Failure parse!');
  console.log(err);
};

export function parseJSON(jsonStr, successCb, failureCb) {
  try {
    const json = JSON.parse(jsonStr);
    successCb(json);
  } catch (error) {
    failureCb(error);
  }
}
