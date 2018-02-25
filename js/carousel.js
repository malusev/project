initSlick()

function initSlick() {
    $(".wrapper").slick({
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.prev',
        nextArrow: '.next',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 640,
            settings: {
                slidesToShow: 2
            }
    }]
    });

}


