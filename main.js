import './main.css'

const hamburger=document.querySelector('.hamburger-menu');
const navbarMenu=document.querySelector('.navBar-menu');

hamburger.addEventListener('click',()=>{
    navbarMenu.classList.toggle('hide');
});
