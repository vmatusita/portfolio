let icon = document.getElementById('menu-icon');
let list = document.getElementById('nav-list');

//condição ? expressãoSeVerdadeira : expressãoSeFalsa
window.onload = function() {
    icon.addEventListener('click', function() {
        this.getAttribute('name') === 'menu-sharp' 
            ? (this.setAttribute('name', 'close-sharp'), list.classList.add('top-[80px]'), list.classList.add('opacity-100')) 
            : (this.setAttribute('name', 'menu-sharp'), list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'));
    });
}
