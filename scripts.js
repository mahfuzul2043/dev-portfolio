window.onload = () => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 630) document.querySelector('.mobile-nav').style.display = 'none';
  })
}

let toggleMenu = () => {
  let nav = document.querySelector('.mobile-nav');
  if (nav.style.display === 'flex')
    nav.style.display = 'none';
  else
    nav.style.display = 'flex';
};