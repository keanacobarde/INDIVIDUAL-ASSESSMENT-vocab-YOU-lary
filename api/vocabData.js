import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocab = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getVocab;
