import renderToDom from '../../utils/renderToDom';

const filterBtns = () => {
  const domString = '<button type="button" class="btn btn-secondary">Secondary</button><button type="button" class="btn btn-secondary">Secondary</button><button type="button" class="btn btn-secondary">Secondary</button><button type="button" class="btn btn-secondary">Secondary</button>';
  renderToDom('#filter-buttons', domString);
};

export default filterBtns;
