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

    // ГЛАВНАЯ

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

    const mainPartnersSwiper = new Swiper('.main-partners__swiper', {
        direction: 'horizontal',
        loop: false,
        speed: 500,
        // allowTouchMove: false,
        slidesPerView: 1,
        slidesPerColumn: 2,

        navigation: {
            nextEl: '.main-partners__swiper-next',
            prevEl: '.main-partners__swiper-prev',
        },
    });


    // УСЛУГИ

    const servicesCleaningThumbsSwiper = new Swiper('.services-cleaning__thumbs', {
        spaceBetween: 0,
        slidesPerView: 3,
        // freeMode: true,
        // watchSlidesProgress: true,
        allowTouchMove: false,
    });

    const servicesCleaningSwiper = new Swiper('.services-cleaning__swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        spaceBetween: rem(3),
        // allowTouchMove: false,
        slidesPerView: 'auto',


        thumbs: {
            swiper: servicesCleaningThumbsSwiper,
        },

        navigation: {
            nextEl: '.services-cleaning__swiper-next',
            prevEl: '.services-cleaning__swiper-prev',
        },

        pagination: {
            el: '.services-cleaning__swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current">${getThreeDigitNumber(current)}</span><span class="total">${getThreeDigitNumber(total)}</span>`;
            }
        },
    });

    const servicesFeedingThumbsSwiper = new Swiper('.services-feeding__thumbs', {
        spaceBetween: 0,
        slidesPerView: 2,
        // freeMode: true,
        // watchSlidesProgress: true,
        allowTouchMove: false,
    });

    const servicesFeadingSwiper = new Swiper('.services-feeding__swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        spaceBetween: rem(3),
        // allowTouchMove: false,
        slidesPerView: 'auto',


        thumbs: {
            swiper: servicesFeedingThumbsSwiper,
        },

        navigation: {
            nextEl: '.services-feeding__swiper-next',
            prevEl: '.services-feeding__swiper-prev',
        },

        pagination: {
            el: '.services-feeding__swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current">${getThreeDigitNumber(current)}</span><span class="total">${getThreeDigitNumber(total)}</span>`;
            }
        },
    });


    const servicesExploitationThumbsSwiper = new Swiper('.services-exploitation__thumbs', {
        spaceBetween: 0,
        slidesPerView: 4,
        // freeMode: true,
        // watchSlidesProgress: true,
        allowTouchMove: false,
    });

    const servicesExploitationSwiper = new Swiper('.services-exploitation__swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        spaceBetween: rem(3),
        // allowTouchMove: false,
        slidesPerView: 'auto',


        thumbs: {
            swiper: servicesExploitationThumbsSwiper,
        },

        navigation: {
            nextEl: '.services-exploitation__swiper-next',
            prevEl: '.services-exploitation__swiper-prev',
        },

        pagination: {
            el: '.services-exploitation__swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current">${getThreeDigitNumber(current)}</span><span class="total">${getThreeDigitNumber(total)}</span>`;
            }
        },
    });

    const partnersObjectsSwiper = new Swiper('.partners-objects__swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        spaceBetween: rem(3),
        // allowTouchMove: false,
        slidesPerView: 'auto',

        navigation: {
            nextEl: '.partners-objects__swiper-next',
            prevEl: '.partners-objects__swiper-prev',
        },

        pagination: {
            el: '.partners-objects__swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current">${getThreeDigitNumber(current)}</span><span class="total">${getThreeDigitNumber(total)}</span>`;
            }
        },
    });

    const partnersStoresSwiper = new Swiper('.partners-stores__swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        spaceBetween: rem(3),
        // allowTouchMove: false,
        slidesPerView: 'auto',

        navigation: {
            nextEl: '.partners-stores__swiper-next',
            prevEl: '.partners-stores__swiper-prev',
        },

        pagination: {
            el: '.partners-stores__swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current">${getThreeDigitNumber(current)}</span><span class="total">${getThreeDigitNumber(total)}</span>`;
            }
        },
    });

    const partnersCentersSwiper = new Swiper('.partners-centers__swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        spaceBetween: rem(3),
        // allowTouchMove: false,
        slidesPerView: 'auto',

        navigation: {
            nextEl: '.partners-centers__swiper-next',
            prevEl: '.partners-centers__swiper-prev',
        },

        pagination: {
            el: '.partners-centers__swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return `<span class="current">${getThreeDigitNumber(current)}</span><span class="total">${getThreeDigitNumber(total)}</span>`;
            }
        },
    });
})