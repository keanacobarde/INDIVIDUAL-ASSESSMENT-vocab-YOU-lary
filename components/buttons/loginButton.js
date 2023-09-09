import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<div class="login-screen"><div class="login-header"><img src="https://i.imgur.com/LMIsHRX.gif"></div><div class="login-button"><button type="button" class="btn btn-outline-secondary btn-lg" id="login-button"> Log In! </button></div></div>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#login-button').addEventListener('click', signIn);
};

export default loginButton;
