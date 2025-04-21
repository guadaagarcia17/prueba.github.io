const scrollTopButton = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});