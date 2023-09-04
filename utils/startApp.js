import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navbar';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
};

export default startApp;
