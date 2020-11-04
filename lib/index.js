// TODO: write your code here!
// When you click on a sport you should toggle the active css class
const clickableElements = document.querySelectorAll('.clickable');

const toggleActiveClass = (event) => {
  event.currentTarget.classList.toggle('active');
};

const bindSportToClick = (element) => {
  element.addEventListener('click', toggleActiveClass);
};

clickableElements.forEach(bindSportToClick);

// clickableElements.forEach((element) => {
//   element.addEventListener('click', (event) => {
//     element.classList.toggle('active');
//   });
// });

// We should be able to select several sports(as if they were checkboxes)
