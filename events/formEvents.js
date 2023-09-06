import { postVocab } from '../api/vocabData';

const formEvents = (user) => {
  document.querySelector('#main-content').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-entry')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        date: new Date(),
        category: document.querySelector('#category-label').innerHTML,
        user: user.uid
      };
      postVocab(payload).then(console.warn);
    }
  });
};

export default formEvents;
