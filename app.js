
particlesJS.load('particles-js', 'particle-cfg.json', function() {
        console.log('callback - particles.js config loaded');
        });

let ice = document.querySelector(".fas.fa-icicles");

ice.addEventListener('click', function handleClick() {
  (document.querySelector(".img-circle").src="./images/ice-man.png");
});
