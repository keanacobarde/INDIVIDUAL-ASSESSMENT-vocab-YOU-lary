import renderToDom from '../../utils/renderToDom';

const filterBtns = () => {
  const domString = '<button type="button" class="btn btn-secondary" id="all">ALL</button><button type="button" class="btn btn-secondary" id="js"> JAVASCRIPT </button><button type="button" class="btn btn-secondary" id="cybersec">CYBERSECURITY</button><button type="button" class="btn btn-secondary" id="pentest">PENETRATION TESTING</button>';
  renderToDom('#filter-buttons', domString);
};

export default filterBtns;
