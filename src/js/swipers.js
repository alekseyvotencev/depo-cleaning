document.addEventListener('DOMContentLoaded', function () {

    // Пересчет rem в px для swiper
    const rem = function (rem) {
        if ($(window).width() > 768) {
            return 0.005208335 * $(window).width() * rem;
        } else {
            // где 375 это ширина моб версии макета
            return (100 / 375) * (0.1 * $(window).width()) * rem;
        }
    }

    const getTwoDigitNumber = function (number) {
        if (number < 10) return String('0' + number)
        else return String(number)
    }

    const mainHeroSwiper = new Swiper('.main-hero__swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        allowTouchMove: false,
        slidesPerView: 'auto',

        // navigation: {
        //     nextEl: '.intro__swiper-next',
        //     prevEl: '.intro__swiper-prev',
        // },

        // pagination: {
        //     el: '.intro__swiper-pagination',
        // },
        // breakpoints: {
        //     320: {
        //         pagination: {
        //             type: 'custom',
        //             renderCustom: function (swiper, current, total) {
        //                 return `<span class="current">${getTwoDigitNumber(current)}</span>`;
        //             }
        //         },
        //     },
        //     769: {
        //         pagination: {
        //             renderBullet: function (index, className) {
        //                 if (index < 10) {
        //                     return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
        //                 } else {
        //                     return '<span class="' + className + '">' + (index + 1) + '</span>';
        //                 }
        //             }
        //         },
        //     }
        // },
    });
})