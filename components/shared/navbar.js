import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar">
<ul class="navbar_links">
  <li class="nav_item">
  </li>
  <li class="nav_item"> 
  </li>
</ul>
</nav>`;
  renderToDom('#navigation', domString);
};

export default navBar;
