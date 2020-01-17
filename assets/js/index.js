let menuState = true;
let scrollTimer;
let menuBtn = document.getElementsByClassName('burger__wrapper')[0];
let burger1 = document.getElementsByClassName('burger__1')[0];
let burger2 = document.getElementsByClassName('burger__2')[0];
let burger3 = document.getElementsByClassName('burger__3')[0];
let nav = document.getElementsByTagName('nav')[0];

menuBtn.addEventListener('click', function () {
  menuState = !menuState;
  if (menuState) {
    burger1.style = 'transform: rotate(0deg); top: 0px';
    burger2.style = 'transform: scale(1)';
    burger3.style = 'transform: rotate(0deg); top: 12px';
    nav.style.height =  '0';
    nav.style.padding = '0';
  } else {
    burger1.style = 'transform: rotate(45deg); top: 6px';
    burger2.style = 'transform: scale(0)';
    burger3.style = 'transform: rotate(-45deg); top: 6px';
    nav.style.height =  `${nav.scrollHeight}px`;
    nav.style.padding = '30px';
  }
});

[...document.querySelectorAll('a[href^="#"]')].forEach(item => item.addEventListener('click', function(event) {
  event.preventDefault();
  menuState = !menuState;
  burger1.style = 'transform: rotate(0deg); top: 0px';
  burger2.style = 'transform: scale(1)';
  burger3.style = 'transform: rotate(0deg); top: 12px';
  if (window.matchMedia("(max-width: 476px)").matches) {
    nav.style.height =  '0';
    nav.style.padding = '0';
  }
  let amount = document.querySelector(this.getAttribute('href')).getBoundingClientRect().top + pageYOffset;
  let time = 500 / (amount / 30);
  scrollTo(amount, time);
}));

function scrollTo(y, time) {
  if(pageYOffset < y) {
    window.scrollBy(0, 30);
    scrollTimer = setTimeout(() => scrollTo(y, time), time);
  } else clearTimeout(scrollTimer);
}


let teamContainer = document.getElementsByClassName('team__persons')[0];
let teamItems = [...document.getElementsByClassName('team__item')];
let detailsItems = [...document.getElementsByClassName('details__item')];
let detailsSlider = document.getElementsByClassName('details__slider')[0];
let triangle = document.getElementsByClassName('triangle')[0];
let teamCurrent = 0;
let teamPrev = teamCurrent;

teamContainer.addEventListener('mouseover', event => {
  let teamItem = event.target.closest('.team__item');
  teamCurrent = teamItems.indexOf(teamItem);
  if (teamCurrent !== -1) {
    detailsItems[teamPrev].classList.remove('active');
    console.log(`${-100 * teamCurrent}%`);
    detailsSlider.style.left = `${-100 * teamCurrent}%`;
    triangle.style.left = `${teamCurrent * 25 + 12}%`;
    teamPrev = teamCurrent;
    detailsItems[teamCurrent].classList.add('active');
  }
});

document.querySelector('video').load();
