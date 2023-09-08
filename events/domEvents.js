import { getSingleVocab, deleteVocab, getVocab } from '../api/vocabData';
import entryForm from '../components/forms/entryForm';
import showVocabCards from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit')) {
      const [, fbk] = e.target.id.split('--');
      getSingleVocab(fbk).then((response) => entryForm(response));
    }
    if (e.target.id.includes('delete')) {
      const [, fbk] = e.target.id.split('--');
      deleteVocab(fbk).then(() => getVocab(user).then(showVocabCards));
    }
  });
};

export default domEvents;
