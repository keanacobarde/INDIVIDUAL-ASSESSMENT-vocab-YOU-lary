import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar">
<ul class="navbar_links">
  <li class="logo">
  <a href="#" style="color:#fde4f2;"> <i class="fa-solid fa-pen-fancy fa-3x"></i></a>
  </li>
  <li class="nav_item"> <a href="#" id="">
  <i class="fa-solid fa-book fa-3x"></i>
  <span class="link-text"> CREATE ENTRY </span>
  </a>
  </li>
  <li class="nav_item"> <a href="#"><i class="fa-solid fa-door-open fa-3x"></i></a><div id="logout-button"></div> </li>
</ul>
</nav>`;
  renderToDom('#navigation', domString);
};

export default navBar;
