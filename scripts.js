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