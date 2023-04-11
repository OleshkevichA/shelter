let petsarr = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];
const hamburger = document.querySelector('.hamburger');
const headerNavigationBlock = document.querySelector('.header-navigation-block');
const headerNameBlock = document.querySelector('.header-name-block');
const navigationShadow = document.querySelector('.navigation-shadow');
const body = document.querySelector('body');
const html = document.querySelector('html');
const headerNavigation = document.querySelector('.header-navigation');
const leftButton = document.querySelector('.btn-left');
const rightButton = document.querySelector('.btn-right');
const wrapperSlider = document.querySelector('.wrapper-slider');
const url = '../../pages/main/pets.json';
let left = document.querySelector('.left-slider-block');
let active = document.querySelector('.active-slider-block');
let right = document.querySelector('.right-slider-block');
let activeItems = document.querySelectorAll('.slider-item');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup-close');
let popupContent = document.querySelector('.popup-content');
let popupTitle = document.querySelector('.popup-title');
let popupKinds = document.querySelector('.popup-kinds');
let popupDiscr = document.querySelector('.popup-discr');
let popupImg = document.querySelector('.popup-img');
let age = document.querySelector('.age');
let inoculations = document.querySelector('.inoculations');
let diseases = document.querySelector('.diseases');
let parasites = document.querySelector('.parasites');


let start = fetch(url)
  .then((result) => result.json())
    .then((data) => {

      let arr = [];
      function checkNumber(arg){
        let number = getRandomInteger();
        if (!arr.includes(number)){
          arg.setAttribute('data-pet', number);
          arg.children[1].textContent = data[number].name;
          arg.children[0].setAttribute('src', `${data[number].img}`);
          arg.children[0].setAttribute('alt', `${data[number].name}`);
          arr.push(number);
        }
        else {
          checkNumber(arg);
        }
      }

      for (let i = 0; i < 3; i++){
        checkNumber(active.children[i]);
      }

      for (let i = 0; i < 3; i++){
        checkNumber(left.children[i]);
      }
      right.children[2].setAttribute('data-pet', arr[3]);
      right.children[2].children[1].textContent = data[arr[3]].name;
      right.children[2].children[0].setAttribute('src', `${data[arr[3]].img}`);
      right.children[2].children[0].setAttribute('alt', `${data[arr[3]].name}`);

      for (let i = 0; i < 2; i++){
        checkNumber(right.children[i]);
      }
  });

hamburger.addEventListener('click', changeMenu);
navigationShadow.addEventListener('click', changeMenu);
headerNavigation.addEventListener('click', (event) => (event.target.tagName == 'A')? changeMenu() : false);
wrapperSlider.addEventListener('click', openModalWindow);
popupClose.addEventListener('click', closeModalWindow);
popup.addEventListener('click', closeModalWindow);
popup.addEventListener('mouseover', () => popupClose.style.background = '#FDDCC4');
popup.addEventListener('mouseout', () => popupClose.style.background = 'transparent');
popupContent.addEventListener('click', (event) => event.stopPropagation());
popupContent.addEventListener('mouseover', (event) => event.stopPropagation());
popupContent.addEventListener('mouseout', (event) => event.stopPropagation());
popupClose.addEventListener('mouseover', () => popupClose.style.background = '#FDDCC4');
popupClose.addEventListener('mouseout', () => popupClose.style.background = 'transparent');

// movement left
const moveLeft = () => {
  wrapperSlider.classList.add('transition-left');
  leftButton.removeEventListener('click', moveLeft);
  rightButton.removeEventListener('click', moveRight);

}
// movement right
const moveRight = () => {
  wrapperSlider.classList.add('transition-right');
  rightButton.removeEventListener('click', moveRight);
  leftButton.removeEventListener('click', moveLeft);

}

leftButton.addEventListener('click', moveLeft);
rightButton.addEventListener('click', moveRight);



wrapperSlider.addEventListener('animationend', (animationEvent) => {

   if (animationEvent.animationName === 'move-left'){
    const leftItems = document.querySelector('.left-slider-block').innerHTML;
    document.querySelector('.active-slider-block').innerHTML = leftItems;

    let arr = [];
    for (let i = 0; i < 3; i++){
      arr.push(+active.children[i].getAttribute('data-pet'));
    }

    function checkNumber(arg){
      let number = getRandomInteger();
      if (!arr.includes(number)){
        arg.setAttribute('data-pet', number);
        arg.children[1].textContent = petsarr[number].name;
        arg.children[0].setAttribute('src', `${petsarr[number].img}`);
        arg.children[0].setAttribute('alt', `${petsarr[number].name}`);
        arr.push(number);
      }
      else {
        checkNumber(arg);
      }
    }

    for (let i = 0; i < 3; i++){
      checkNumber(left.children[i]);
    }
    right.children[2].setAttribute('data-pet', arr[3]);
    right.children[2].children[1].textContent = petsarr[arr[3]].name;
    right.children[2].children[0].setAttribute('src', `${petsarr[arr[3]].img}`);
    right.children[2].children[0].setAttribute('alt', `${petsarr[arr[3]].name}`);

    for (let i = 0; i < 2; i++){
      checkNumber(right.children[i]);
    }
  }

  else if (animationEvent.animationName === 'move-right'){
    const rightItems = document.querySelector('.right-slider-block').innerHTML;
    document.querySelector('.active-slider-block').innerHTML = rightItems;

    let arr = [];
    for (let i = 0; i < 3; i++){
      arr.push(+active.children[i].getAttribute('data-pet'));
    }

    function checkNumber(arg){
      let number = getRandomInteger();
      if (!arr.includes(number)){
        arg.setAttribute('data-pet', number);
        arg.children[1].textContent = petsarr[number].name;
        arg.children[0].setAttribute('src', `${petsarr[number].img}`);
        arg.children[0].setAttribute('alt', `${petsarr[number].name}`);
        arr.push(number);
      }
      else {
        checkNumber(arg);
      }
    }

    for (let i = 0; i < 3; i++){
      checkNumber(left.children[i]);
    }
    right.children[2].setAttribute('data-pet', arr[3]);
    right.children[2].children[1].textContent = petsarr[arr[3]].name;
    right.children[2].children[0].setAttribute('src', `${petsarr[arr[3]].img}`);
    right.children[2].children[0].setAttribute('alt', `${petsarr[arr[3]].name}`);

    for (let i = 0; i < 2; i++){
      checkNumber(right.children[i]);
    }
  }
  wrapperSlider.classList.remove('transition-left');
  wrapperSlider.classList.remove('transition-right');
  leftButton.addEventListener('click', moveLeft);
  rightButton.addEventListener('click', moveRight);
  activeItems = document.querySelectorAll('.slider-item');
});

// get random number
function getRandomInteger(){
  return result = Math.floor(Math.random() * 8);
}
// activate menu
function changeMenu (){
  hamburger.classList.toggle('active');
  headerNavigationBlock.classList.toggle('active');
  headerNameBlock.classList.toggle('active');
  navigationShadow.classList.toggle('active');
  body.classList.toggle('active')
  html.classList.toggle('active')
}

// open modal window
function openModalWindow(event) {
  console.log(event)
  let number = +event.currentTarget.getAttribute('data-pet');
  popupTitle.textContent = petsarr[number].name;
  popupKinds.textContent = `${petsarr[number].type} - ${petsarr[number].breed}`;
  popupImg.setAttribute('src', `${petsarr[number].img}`);
  popupImg.setAttribute('alt', `${petsarr[number].name}`);
  popupDiscr.textContent = petsarr[number].description;
  age.textContent = ` ${petsarr[number].age}`;
  inoculations.textContent = ` ${petsarr[number].inoculations}`;
  diseases.textContent = ` ${petsarr[number].diseases}`;
  parasites.textContent = ` ${petsarr[number].parasites}`;

  popup.classList.toggle('activate');
  body.classList.toggle('active')
  html.classList.toggle('active')
}
// close modal window
function closeModalWindow(){
  popup.classList.remove('activate');
  body.classList.remove('active')
  html.classList.remove('active')
}

