$(document).ready(function() {
    $('.carousel__inner').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 601,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });

    //modal
    $('[data-modal=appointment]').on('click', function() {
      $('.overlay, #appointment').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #appointment, #order, #thanks').fadeOut();
    });

    $('.button__gift-item').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.gift-cards__item-name').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });

    $('.header__burger-img').on('click', function() {
      $('.burger').toggleClass('burger_active');
    })
});