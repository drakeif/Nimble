// MENU
const menuBtn = document.querySelector('.header__burgerMenu'),
      menuNav = document.querySelector('.header__nav'),
      closeMenu = document.querySelectorAll('.header__nav_links'),
      body = document.querySelector('body');

menuBtn.addEventListener('click', (e)=> {
    e.target.classList.toggle('active');
    menuNav.classList.toggle('active');
    body.classList.toggle('active');
});

closeMenu.forEach(el => el.addEventListener('click', ()=> {
    menuBtn.classList.remove('active');
    menuNav.classList.remove('active');
    body.classList.remove('active');
  }));
// FIXED MENU
let waypoint = new Waypoint({
    element: document.getElementById('cards'),
    handler: function(direction) {
      let header = document.getElementById('header');
      if(direction === 'down') {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    }
  });