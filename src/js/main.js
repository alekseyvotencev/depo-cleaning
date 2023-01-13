document.addEventListener('DOMContentLoaded', function () {

    // Пересчет rem в px
    const rem = function (rem) {
        if (window.innerWidth > 768) {
            return 0.005208335 * window.innerWidth * rem;
        } else {
            // где 375 это ширина моб версии макета
            return (100 / 375) * (0.1 * window.innerWidth) * rem;
        }
    }


    // карта на главной странице
    if (document.querySelector('#main-contacts-map')) {
        ymaps.ready(init);
        function init() {
            const myMap = new ymaps.Map("main-contacts-map", {
                center: [55.816708, 37.611281],
                zoom: 16
            });

            const homaPlacemark = new ymaps.Placemark([55.815787, 37.619486], {},
                {
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: '../images/svg/map-point.svg',
                    // Размеры метки.
                    iconImageSize: [rem(12.8), rem(12.8)],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [rem(-6.4), rem(-6.4)]
                })
            myMap.behaviors.disable('scrollZoom')
            myMap.geoObjects.add(homaPlacemark);
        }


    }
})