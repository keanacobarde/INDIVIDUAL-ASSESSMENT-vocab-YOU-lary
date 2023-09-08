import { getSingleVocab } from '../api/vocabData';
import entryForm from '../components/forms/entryForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit')) {
      const [, fbk] = e.target.id.split('--');
      console.warn(fbk, user.uid);
      getSingleVocab(fbk).then((response) => entryForm(response));
    }
    if (e.target.id.includes('delete')) {
      const [, fbk] = e.target.id.split('--');
      console.warn(fbk, user.uid);
    }
  });
};

export default domEvents;
