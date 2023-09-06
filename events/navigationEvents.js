import { signOut } from '../utils/auth';
import { getVocab } from '../api/vocabData';
import entryForm from '../components/forms/entryForm';
import showVocabCards from '../pages/vocab';
import filterBtns from '../components/buttons/filterButtons';

const navigationEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id === 'signOut') {
      signOut();
    }

    if (e.target.id === 'home') {
      filterBtns();
      getVocab(user).then(showVocabCards);
    }

    if (e.target.id === 'create-entry') {
      entryForm();
    }

    if (e.target.id === 'all') {
      getVocab(user).then(showVocabCards);
    }

    if (e.target.id === 'js') {
      getVocab(user).then((response) => showVocabCards(response.filter((term) => term.category === 'JavaScript')));
    }

    if (e.target.id === 'cybersec') {
      getVocab(user).then((response) => showVocabCards(response.filter((term) => term.category === 'Cybersecurity')));
    }

    if (e.target.id === 'pentest') {
      getVocab(user).then((response) => showVocabCards(response.filter((term) => term.category === 'Penetration Testing')));
    }
  });
};

export default navigationEvents;
