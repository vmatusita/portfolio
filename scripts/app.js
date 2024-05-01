let icon = document.getElementById('menu-icon');
let list = document.getElementById('nav-list');

//condição ? expressãoSeVerdadeira : expressãoSeFalsa
window.onload = function() {
    icon.addEventListener('click', function() {
        this.getAttribute('name') === 'menu-outline' 
            ? (this.setAttribute('name', 'close-outline'), list.classList.add('top-[80px]'), list.classList.add('opacity-100')) 
            : (this.setAttribute('name', 'menu-outline'), list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'));
    });
}
