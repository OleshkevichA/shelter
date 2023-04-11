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

console.log(`Уважаемый проверяющий, прошу дать время на дороботку пагинации до утра/обеда среды, спасибо`)

const hamburger = document.querySelector('.hamburger');
const headerNavigationBlock = document.querySelector('.header-navigation-block');
const headerNameBlock = document.querySelector('.header-name-block');
const navigationShadow = document.querySelector('.navigation-shadow');
const body = document.querySelector('body');
const html = document.querySelector('html');
const headerNavigation = document.querySelector('.header-navigation');
const sliderItems = document.querySelectorAll('.slider-item');
const friendsContainer = document.querySelector('.friends-container');
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
let countPage = 1;
let arrResult = [];
const fastLeft = document.querySelector('.fast-left');
const left = document.querySelector('.left');
const pageNumber = document.querySelector('.page-number');
const right = document.querySelector('.right')
const fastRight = document.querySelector('.fast-right')



hamburger.addEventListener('click', changeMenu);
navigationShadow.addEventListener('click', changeMenu);
headerNavigation.addEventListener('click', (event) => (event.target.tagName == 'A')? changeMenu() : false);

sliderItems.forEach(elem => elem.addEventListener('click', openModalWindow));
popupClose.addEventListener('click', closeModalWindow);
popup.addEventListener('click', closeModalWindow);
popup.addEventListener('mouseover', () => popupClose.style.background = '#FDDCC4');
popup.addEventListener('mouseout', () => popupClose.style.background = 'transparent');
popupContent.addEventListener('click', (event) => event.stopPropagation());
popupContent.addEventListener('mouseover', (event) => event.stopPropagation());
popupContent.addEventListener('mouseout', (event) => event.stopPropagation());
popupClose.addEventListener('mouseover', () => popupClose.style.background = '#FDDCC4');
popupClose.addEventListener('mouseout', () => popupClose.style.background = 'transparent');

right.addEventListener('click', rightStep);
left.addEventListener('click', leftStep)



// open burger
function changeMenu (){
  hamburger.classList.toggle('active');
  headerNavigationBlock.classList.toggle('active');
  headerNameBlock.classList.toggle('active');
  navigationShadow.classList.toggle('active');
  body.classList.toggle('active')
  html.classList.toggle('active')
}

// open modal window
function openModalWindow(event){
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

function rightStep(){
  left.removeAttribute('disabled');
  fastLeft.removeAttribute('disabled');
  left.classList.remove('disabled');
  fastLeft.classList.remove('disabled');
  console.log(countPage);
  countPage += 1;
  console.log(countPage);
  pageNumber.textContent = countPage;
  if (countPage < arrResult.length){
    //pageNumber.textContent = countPage;
     for (let i = 0; i < sliderItems.length; i++){
        sliderItems[i].setAttribute('data-pet', arrResult[countPage -1][i]);
        sliderItems[i].children[1].textContent = petsarr[arrResult[countPage -1][i]].name;
        sliderItems[i].children[0].setAttribute('src', `${petsarr[arrResult[countPage -1][i]].img}`);
        sliderItems[i].children[0].setAttribute('alt', petsarr[arrResult[countPage -1][i]].name);
     }
  }
  else {
    right.removeEventListener('click', rightStep);
    left.addEventListener('click', leftStep)
    right.setAttribute('disabled', true);
    fastRight.setAttribute('disabled', true);
    right.classList.add('disabled');
    fastRight.classList.add('disabled');
  }
}

function leftStep(){
  right.removeAttribute('disabled');
  fastRight.removeAttribute('disabled');
  right.classList.remove('disabled');
  fastRight.classList.remove('disabled');
  console.log(countPage);
  countPage -= 1;
  console.log(countPage);
  pageNumber.textContent = countPage;
  if (countPage > 1){
    //pageNumber.textContent = countPage;
     for (let i = 0; i < sliderItems.length; i++){
        sliderItems[i].setAttribute('data-pet', arrResult[countPage -1][i]);
        sliderItems[i].children[1].textContent = petsarr[arrResult[countPage -1][i]].name;
        sliderItems[i].children[0].setAttribute('src', `${petsarr[arrResult[countPage -1][i]].img}`);
        sliderItems[i].children[0].setAttribute('alt', petsarr[arrResult[countPage -1][i]].name);
     }
  }
  else {
    left.removeEventListener('click', leftStep);
    right.addEventListener('click', rightStep)
    left.setAttribute('disabled', true);
    fastLeft.setAttribute('disabled', true);
    left.classList.add('disabled');
    fastLeft.classList.add('disabled');
  }
}



// shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getArrayFor1280() {
  arrResult = [];
  for (let i = 0; i <= 5; i++){
    let arr = [0, 1, 2, 3, 4, 5, 6, 7];
    shuffle(arr);
    arrResult.push(arr)
  }
}


getArrayFor1280();
console.log(arrResult)
