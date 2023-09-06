const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit')) {
      console.warn('edit?', user.uid);
    }
  });
};

export default domEvents;
