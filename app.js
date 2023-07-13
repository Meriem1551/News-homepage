let openMenu=document.getElementById('MENU');
let closeMenu=document.getElementById('close');
let Menu=document.getElementById('menu-display');
let boxShadow=document.getElementById('shadow')
openMenu.addEventListener('click',showMenu);
 function showMenu(){
    Menu.style.display="block";
    boxShadow.style.display="block"
 }
 closeMenu.addEventListener('click',hideMenu);
 function hideMenu(){
    Menu.style.display="none";
    boxShadow.style.display="none"
 }