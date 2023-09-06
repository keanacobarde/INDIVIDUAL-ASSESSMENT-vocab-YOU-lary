import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navbar';
import navigationEvents from '../events/navigationEvents';
import showVocabCards from '../pages/vocab';
import { getVocab } from '../api/vocabData';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  getVocab(user).then(showVocabCards);
  navigationEvents(user);
  formEvents(user);
};

export default startApp;
