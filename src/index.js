import './style.css';

const icon = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');


const ipad = window.matchMedia('screen and (max-width: 832px)');
//console.log(ipad);

// Optimizar con JS (Eliminar y agregar escuchas de eventos )
ipad.addListener((event) => {
   
   if (event.matches) {
      icon.addEventListener('click', mostrarOcultar);
      console.log(event.matches);
   } else {
      icon.removeEventListener('click', mostrarOcultar);
      console.log(event.matches);
   }
});





const mostrarOcultar = () =>  {

   if (menu.classList.contains('in-active')) {
      menu.classList.remove('in-active');
   } else {
      menu.classList.add('in-active');
   }
}
