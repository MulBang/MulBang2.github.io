document.addEventListener("DOMContentLoaded", () => {
  const largeCloud = document.querySelector('.large');
  const mediumCloud = document.querySelector('.medium');
  
  largeCloud.addEventListener('animationend', () => {
    mediumCloud.style.animationPlayState = 'running';
  });

  mediumCloud.addEventListener('animationend', () => {
    document.querySelector('.resume').style.display = 'block';
  });
});
