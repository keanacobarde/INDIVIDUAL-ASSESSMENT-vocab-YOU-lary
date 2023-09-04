import { signOut } from '../utils/auth';

const navigationEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id === 'signOut') {
      signOut();
    }
  });
};

export default navigationEvents;
