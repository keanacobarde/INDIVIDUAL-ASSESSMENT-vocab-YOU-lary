import { getVocab, postVocab, patchVocab } from '../api/vocabData';
import showVocabCards from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#main-content').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-entry')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        date: new Date(),
        category: document.querySelector('#category-label').innerHTML,
        uid: user.uid
      };
      postVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        patchVocab(patchPayload).then(() => {
          getVocab(user).then(showVocabCards);
        });
      });
    }
  });
};

export default formEvents;
