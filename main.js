//Select element function
const selectElement = function (element){
     return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});
//Scroll reveal
window.sr = Scroll();

sr.reveal('.aninate-left', {
   origin: 'left',
   duration: 1000,
   distance: '25rem',
   delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
 });
 
 sr.reveal('.aninate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
 });

 sr.reveal('.aninate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 300
 });
