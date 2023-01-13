document.addEventListener('DOMContentLoaded', function () {

    // Пересчет rem в px для swiper
    const rem = function (rem) {
        if (window.innerWidth > 768) {
            return 0.005208335 * window.innerWidth * rem;
        } else {
            // где 375 это ширина моб версии макета
            return (100 / 375) * (0.1 * window.innerWidth) * rem;
        }
    }

    const getThreeDigitNumber = function (number) {
        if (number < 10) return String('00' + number)
        else if (number > 10 && number < 100) return String('0' + number)
        else return String(number)
    }

    const mainHeroSwiper = new Swiper('.main-hero__swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        allowTouchMove: false,
        slidesPerView: 'auto',

        navigation: {
            nextEl: '.main-hero__swiper-next',
            prevEl: '.main-hero__swiper-prev',
        },

        pagination: {
            el: '.main-hero__swiper-pagination',
            renderBullet: function (index, className) {
                return `<span class="${className}">${getThreeDigitNumber(index + 1)}</span>`;
            }
        },
    });

    const mainServicesThumbsSwiper = new Swiper('.main-services__thumbs', {
        spaceBetween: 0,
        slidesPerView: 3,
        // freeMode: true,
        // watchSlidesProgress: true,
        allowTouchMove: false,
    });

    const mainServicesSwiper = new Swiper('.main-services__swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        spaceBetween: rem(3),
        // allowTouchMove: false,
        slidesPerView: 'auto',


        thumbs: {
            swiper: mainServicesThumbsSwiper,
        },

        navigation: {
            nextEl: '.main-services__swiper-next',
            prevEl: '.main-services__swiper-prev',
        },

        pagination: {
            el: '.main-services__swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current">${getThreeDigitNumber(current)}</span><span class="total">${getThreeDigitNumber(total)}</span>`;
            }
        },
    });

    const mainAboutSwiper = new Swiper('.main-about__swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        spaceBetween: rem(3),
        // allowTouchMove: false,
        slidesPerView: 'auto',

        navigation: {
            nextEl: '.main-about__swiper-next',
            prevEl: '.main-about__swiper-prev',
        },

        pagination: {
            el: '.main-about__swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current">${getThreeDigitNumber(current)}</span><span class="total">${getThreeDigitNumber(total)}</span>`;
            }
        },
    });
})