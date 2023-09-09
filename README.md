# STUDIFY   [![Netlify Status](https://api.netlify.com/api/v1/badges/4ab7e730-7ed3-4cfd-a988-66195e79a991/deploy-status)](https://studifyassignment.netlify.app)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

A persistent, CRUD application for creating vocabulary entries, modifying entries, reading, and deleting them. 

[View App](#https://studifyassignment.netlify.app)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
1. Clone the repo
2. Run commands in the following order: 
```
npm install
npm start
```
## About the User <!-- This is a scaled down user persona -->
- The idea user of this application is a student/passionate learner who wants to improve their vocabulary in a certain subject.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- This application is for studying vocabulary terms.
- A user can add a new term, remove a term, edit terms and their definitions.

## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->
https://www.loom.com/share/debaab731d8a4165b79d72ac30b11e35?sid=cc3d2303-b70e-4682-af4d-77a403cf69d0

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](#https://studifyassignment.netlify.app)
- [Wireframes](#https://www.figma.com/file/IW4jF3GnzCFLYbEXlgFNIZ/MVP)
- [Project Board](#https://github.com/users/keanacobarde/projects/6/views/1)
- [ERD](#https://dbdiagram.io/d/64f35c4602bd1c4a5eda2adb)
- Technical Flow Chart (#https://www.figma.com/file/BVSlw5Az1YrTqgVetB1d5v/Studify---Components?type=design&node-id=0%3A1&mode=design&t=eEXk1SwlHxjN2i79-1)
## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
Event Listeners for the Drop-down! 
```
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
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="auto" alt="Your Alt" src="assets\Screenshot 2023-09-09 100045.png">
<img width="auto" alt="Your Alt" src="assets\vocab.png">

## Contributors
- [Keana Cobarde](https://github.com/keanacobarde)
