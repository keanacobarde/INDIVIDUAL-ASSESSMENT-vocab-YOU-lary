import renderToDom from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';

const entryForm = (obj = {}) => {
  clearDom();
  const domString = `<div id="entryForm">
<form id="${obj.firebaseKey ? `edit-entry-form--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4" style="height:100%;width:80%;margin-top:10%">
<div class="form-group">
      <label for="image">Title</label>
      <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}"required>
    </div>
    <div class="form-group">
      <label for="image">Definition</label>
      <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.definition || ''}" required>
    </div>
    <div class="dropdown" style="margin:0.5rem 0;">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="category-label">
      ${obj.category || 'Category'}
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#" value="Javascript" id="javascript">JavaScript</a></li>
      <li><a class="dropdown-item" href="#" value="Cybersecurity" id="cybersecurity">Cybersecurity</a></li>
      <li><a class="dropdown-item" href="#" value="Penetration Testing" id="pentesting">Penetration Testing</a></li>
    </ul>
  </div>
    <button type="submit" class="btn btn-primary mt-3">Create Entry</button>
  </form></div>`;
  renderToDom('#main-content', domString);

  // EVENT LISTENERS //
  const eventListeners = () => {
    document.querySelector('#entryForm').addEventListener('click', (e) => {
      const catLabel = document.querySelector('#category-label');
      if (e.target.id === 'javascript') {
        catLabel.innerHTML = 'JavaScript';
      }
      if (e.target.id === 'cybersecurity') {
        catLabel.innerHTML = 'Cybersecurity';
      }
      if (e.target.id === 'pentesting') {
        catLabel.innerHTML = 'Penetration Testing';
      }
    });
  };

  eventListeners();
};

export default entryForm;
