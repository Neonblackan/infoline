let burger = document.querySelector('#burger');
let headerNav = document.querySelector('.menu');
// let overlay = document.querySelector('.overlay');
// let requestCall = document.querySelector('#requestCall');
// let closeForm = document.querySelector('#closeForm');



burger.addEventListener('click', function () {
    console.log('Клик по бургеру');
    headerNav.classList.toggle('header__menu-mobile');
})

// requestCall.addEventListener('click', () => {
//     overlay.classList.add('active');
// })

// closeForm.addEventListener('click', () => {
//     overlay.classList.remove('active');
// })