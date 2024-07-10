const overlay = document.querySelector('.overlay');

//Шапка и фиксированная кнопка
window.addEventListener('scroll', () => {
    const promo = document.querySelector('.promo');
    const header = document.querySelector('.header');
    const logo = document.querySelector('.header__logo');
    const btn = document.querySelector('.btn-fixed')
    let scrollTop = window.scrollY;
    let promoCenter = promo.offsetHeight / 2;
    
    if (scrollTop > promoCenter) {
        header.classList.add('header_show');
        logo.classList.add('animate__fadeIn');
        logo.classList.remove('visibility-hidden', 'animate__fadeOut');

        btn.classList.add('animate__slideInUp');
        btn.classList.remove('animate__slideOutDown', 'visibility-hidden');
        
    } else {
        header.classList.remove('header_show');
        logo.classList.remove('animate__fadeIn');
        logo.classList.add('animate__fadeOut');

        btn.classList.remove('animate__slideInUp');
        btn.classList.add('animate__slideOutDown');
    };
});

//боковое меню
const menu = document.querySelector('.side-menu');

document.querySelector('.hamburger').addEventListener('click', () => {
    menu.classList.add('animate__slideInRight');  
    menu.classList.remove('animate__slideOutRight', 'visibility-hidden');
    overlay.classList.add('overlay_show');
    document.body.classList.add('overflow-hidden');
})

document.querySelector('.side-menu__close').addEventListener('click', () => {
    menu.classList.remove('animate__slideInRight');  
    menu.classList.add('animate__slideOutRight');
    overlay.classList.remove('overlay_show');
    document.body.classList.remove('overflow-hidden');
})