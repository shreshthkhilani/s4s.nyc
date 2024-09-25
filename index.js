const staticImage = document.querySelector('.static-image');
const rotatingImage = document.querySelector('.rotating-image');

document.body.addEventListener('click', () => {
  rotatingImage.style.animation = null;
  staticImage.classList.add('sling');

  setTimeout(() => {
    staticImage.classList.remove('sling');
    rotatingImage.style.animation = 'rotate 12s linear 1';
  }, 2000);
});
