import { signOut } from '../utils/auth';
import getVocab from '../api/vocabData';

const navigationEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id === 'signOut') {
      signOut();
    }

    if (e.target.id === 'home') {
      getVocab().then(console.warn);
    }
  });
};

export default navigationEvents;
