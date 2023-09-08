import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navbar';
import navigationEvents from '../events/navigationEvents';
import showVocabCards from '../pages/vocab';
import { getVocab } from '../api/vocabData';
import formEvents from '../events/formEvents';
import filterBtns from '../components/buttons/filterButtons';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  filterBtns();
  getVocab(user).then(showVocabCards);
  navigationEvents(user);
  domEvents(user);
  formEvents(user);
};

export default startApp;
