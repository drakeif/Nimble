const menuBtn = document.querySelector('.header__burgerMenu'),
      menuNav = document.querySelector('.header__nav'),
      closeMenu = document.querySelectorAll('.header__nav_links');

menuBtn.addEventListener('click', (e)=> {
    e.target.classList.toggle('active');
    menuNav.classList.toggle('active');
});

closeMenu.forEach(el => el.addEventListener('click', ()=> {
    menuBtn.classList.remove('active');
    menuNav.classList.remove('active');
  }));