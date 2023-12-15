let dropdown_menu = document.querySelector('.dropdown_menu');
let toggle_btn = document.querySelector('#toggle_btn');

toggle_btn.onclick = function(){
    dropdown_menu.classList.toggle("open");
}