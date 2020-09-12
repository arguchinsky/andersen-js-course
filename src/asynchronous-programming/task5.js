export const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

export const getResponsesParallel = (array) => {
  Promise.all(array.map((url) => fetch(url).then((response) => response.json()))).then((data) =>
    console.log('<<< TASK 5 parallel >>>', data, '<<< TASK 5 parallel END >>>')
  );
};

export const getResponsesSequence = (array) => {
  array
    .reduce(
      (acc, url) =>
        acc.then((added) =>
          fetch(url)
            .then((response) => response.json())
            .then((data) => [...added, data])
        ),
      Promise.resolve([])
    )
    .then((data) => {
      console.log('<<< TASK 5 sequence >>>', data, '<<< TASK 5 sequence END >>>');
    });
};

export const getResponsesSequence2 = (array) =>
  array.forEach((url) =>
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log('<<< TASK 5 sequence2 >>>', data))
      .catch((error) => console.log(error))
  );
