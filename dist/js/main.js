window.addEventListener('DOMContentLoaded', event => {
  particlesJS.load('particles-js', 'js/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
  });  
});

function handleResize() {
  const doc = document.documentElement;
  let height = doc.scrollHeight;
  let width = doc.clientWidth;
  let background = document.querySelector('particles-js-canvas-el');
  let context = background.getContext('2d');
}
