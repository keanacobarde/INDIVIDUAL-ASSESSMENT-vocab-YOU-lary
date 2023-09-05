import { signOut } from '../utils/auth';
import getVocab from '../api/vocabData';
import showVocabCards from '../pages/vocab';
import entryForm from '../components/forms/entryForm';

const navigationEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id === 'signOut') {
      signOut();
    }

    if (e.target.id === 'home') {
      getVocab(user).then(showVocabCards);
    }

    if (e.target.id === 'create-entry') {
      entryForm();
    }
  });
};

export default navigationEvents;
