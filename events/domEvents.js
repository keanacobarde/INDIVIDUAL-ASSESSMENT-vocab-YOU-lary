const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit')) {
      console.warn('edit?', user.uid);
    }
    if (e.target.id.includes('delete')) {
      console.warn('delete?', user.uid);
    }
  });
};

export default domEvents;
