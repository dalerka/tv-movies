// Dropdown Menu Activation
var dropdown = document.getElementById('dropdown');
var menu = document.getElementById('menu');

dropdown.addEventListener('click', function(){
  menu.classList.toggle('menu--is-active');
});