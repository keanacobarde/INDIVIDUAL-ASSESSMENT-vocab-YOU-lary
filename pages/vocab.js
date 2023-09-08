import renderToDom from '../utils/renderToDom';

const showVocabCards = (array) => {
  let domString = '<div id="vocab-container">';
  array.forEach((obj) => {
    domString += `<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${obj.title}</h5>
  <h6 class="card-subtitle mb-2 text-body-secondary">${obj.category}</h6>
  <p class="card-text">${obj.definition}</p>
  <a href="#" class="card-link" id="edit-vocab-card--${obj.firebaseKey}">Edit</a>
  <a href="#" class="card-link" id="delete-vocab-card--${obj.firebaseKey}">Delete</a>
</div>
</div>`;
  });
  domString += '</div>';
  renderToDom('#main-content', domString);
};

export default showVocabCards;
