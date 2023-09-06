import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar">
<ul class="navbar_links">
<li class="logo">
<i class="fa-solid fa-pen-fancy fa-3x" id="home" style="margin-bottom:auto;"></i></a>
</li>
  <li class="nav_item"> <a href="#">
  <i class="fa-solid fa-book fa-3x" id="create-entry"></i>
  <span class="link-text"> CREATE ENTRY </span>
  </a>
  </li>
  <li class="nav_item"> <a href="#"><i class="fa-solid fa-door-open fa-3x" id="signOut"></i></li>
</ul>
</nav>`;
  renderToDom('#navigation', domString);
};

export default navBar;
