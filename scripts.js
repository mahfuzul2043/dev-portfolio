let toggleMenu = () => {
  let nav = document.querySelector('.mobile-nav');
  if (nav.style.display === 'flex')
    nav.style.display = 'none';
  else
    nav.style.display = 'flex';
};

window.onclick = e => {
  if (e.srcElement !== document.querySelector('.menu-icon')) {
    let nav = document.querySelector('.mobile-nav');
    if (nav.style.display === 'flex')
      nav.style.display = 'none';
  }
}

// Slideshow Scripts

let createSlides = sources => {
  let slides = document.querySelector('.slides');
  slides.innerHTML = '';
  let count = 1;

  sources.forEach(source => {
    let slide = document.createElement('div');
    slide.classList.add('mySlides');
    let numText = document.createElement('div');
    numText.classList.add('numbertext');
    numText.innerText = `${count++} / ${sources.length}`;
    let img = document.createElement('img');
    img.src = source;
    img.style.width = '100%';
    slide.appendChild(numText);
    slide.appendChild(img);
    slides.appendChild(slide);
  });
}

let captions = [];
let openSlideshow = name => {
  switch (name) {
    case 'HireUp':
      createSlides(['media/HireUp/login.PNG', 'media/HireUp/jobs.PNG', 'media/HireUp/payment.PNG', 'media/HireUp/posts.PNG', 'media/HireUp/settings.PNG']);
      captions = [
        'The login page. Token based authentication (JWTs) is used.',
        'The jobs page, where businesses can add new jobs and remove/report/view current job listings.',
        'The payment page, where businesses can add/remove/set default credit cards. Powered by Stripe API.',
        'The page where businesses can buy job posts. Payment processing managed by Stripe API.',
        'The settings page, where users can update their info or change the profile picture (hosted on Google storage.) The NPM package Multer is used to handle the uploading process.'
      ];
      openModal();
      currentSlide(1);
      break;
    case 'Covershiftz':
      createSlides(['media/Covershiftz/main.png', 'media/Covershiftz/mapview.png', 'media/Covershiftz/details.png',  'media/Covershiftz/drawer.png', 'media/Covershiftz/search.png', 'media/Covershiftz/settings.png']);
      captions = [
        'The main screen of the app. Users have the option of signing in using Facebook (OAuth)',
        'The MapView component provided by React Native, where workers can search for jobs within the selected radius (currently limited to 50mi)',
        'Details of the job being applied for',
        'The app drawer',
        'The search component, where users can search for jobs using specific keywords.',
        'The settings component, where users can update their info or profile picture (hosted on Google storage). The NPM package Multer is used to handle the uploading process.'
      ];
      openModal();
      currentSlide(1);
      break;
    default:
      break;
  }
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = captions[slideIndex-1];
}