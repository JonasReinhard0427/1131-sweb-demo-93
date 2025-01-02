const mobileBtn = document.getElementById('hamburger-icon');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuicon = document.querySelector('#hamburger-icon i');

const navbar = document.querySelector('.header');
console.log('header', navbar);

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 100) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

mobileBtn.addEventListener('click', () => {
  // Open/hide mobile menu
  mobileMenu.classList.toggle('hidden');

  // Change mobile toggler icon on open/close
  if (!mobileMenu.classList.contains('hidden')) {
    mobileMenuicon.classList.remove('fa-bars');
    mobileMenuicon.classList.add('fa-xmark');
  } else {
    mobileMenuicon.classList.remove('fa-xmark');
    mobileMenuicon.classList.add('fa-bars');
  }
});
