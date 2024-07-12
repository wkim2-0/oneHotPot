window.addEventListener('DOMContentLoaded', () => {

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

    document.querySelectorAll('.side-menu .close, .city__side-menu, .nav').forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('animate__slideInRight');  
            menu.classList.add('animate__slideOutRight');
            overlay.classList.remove('overlay_show');
            document.body.classList.remove('overflow-hidden');
        })
    })



    //Выбор города
    document.querySelectorAll('.city').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.city-popup').classList.toggle('city-popup_show');
            overlay.classList.add('overlay_show');
            document.body.classList.add('overflow-hidden');
        })
    })

    function closeCityPopup() {
        document.querySelector('.city-popup').classList.toggle('city-popup_show');
        overlay.classList.remove('overlay_show');
        document.body.classList.remove('overflow-hidden');
    }

    document.querySelector('.city-popup .close').addEventListener('click', () => {
        closeCityPopup();
    })



    //закрытие всех окон при нажатии на overlay
    const overlay = document.querySelector('.overlay');

    overlay.addEventListener('click', () => {
        closeCityPopup();
    })
})



