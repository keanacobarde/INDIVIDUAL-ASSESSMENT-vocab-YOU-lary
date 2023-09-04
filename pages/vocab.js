import renderToDom from '../utils/renderToDom';

const showVocabCards = (array) => {
  let domString = '';
  array.forEach((obj) => {
    domString += `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${obj.title}</h5>
  <h6 class="card-subtitle mb-2 text-body-secondary">${obj.category}</h6>
  <p class="card-text">${obj.defintion}</p>
  <a href="#" class="card-link">Edit</a>
  <a href="#" class="card-link">Delete</a>
</div>
</div>`;
  });
  renderToDom('#main-content', domString);
};

export default showVocabCards;
