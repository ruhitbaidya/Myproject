$(document).ready(function(){
    $('.counter').counterUp({
    delay: 10,
    time: 1000
});
var mixer = mixitup('.grid-protfolio-container');
});

        $(function() {
          $.scrollify({
            section : ".smoothScroll",
              setHeights: false,
              updateHash: false,
          });
        });


$(document).ready(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed:2000,
     loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
});


// type js calling 

  $(function() {
        $('.text-header').animatedHeadline({
            animationType: 'clip'
        });
    })