import { signOut } from '../utils/auth';
import getVocab from '../api/vocabData';
import showVocabCards from '../pages/vocab';

const navigationEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id === 'signOut') {
      signOut();
    }

    if (e.target.id === 'home') {
      getVocab(user).then(showVocabCards);
    }

    if (e.target.id === 'create-entry') {
      console.warn('CREATE ENTRY?');
    }
  });
};

export default navigationEvents;
