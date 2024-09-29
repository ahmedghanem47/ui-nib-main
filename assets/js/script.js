
  $(document).ready(function () {
    const $navbar = $('#navbar');
    if ($navbar.length) { // Check if the element exists
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 50) { // Check scroll position
                $navbar.addClass('scrolled'); // Add class
            } else {
                $navbar.removeClass('scrolled'); // Remove class
            }
        });
    } else {
        console.error('Navbar element not found');
    }
});
$(document).ready(function () {
  



  $(".hero-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    nav: true,
    navText: ["&#x27A4;", "&#x27A3;"],
    autoplay: true,
    autoplaySpeed: 800,
    autoplayTimeout: 3000, // الوقت بين كل سلايد (3 ثواني)
    autoplayHoverPause: true, // إيقاف التشغيل عند تمرير الماوس
    responsiveClass: true,
    responsive: {
      900: { items: 1 },
      700: { items: 1 },
      0: { items: 1 },
    },
  });


  $(".follow-ups-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 3,
    nav: false,
    dots: false,
    slideSpeed: 10000,
    autoplaySpeed: 800,
    autoplayTimeout: 5000,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      900: { items: 4 },
      700: { items: 3 },
      0: { items: 1 },
    },
  });
  $(".achievements-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 3,
    nav: false,
    dots: false,
    slideSpeed: 10000,
    autoplaySpeed: 800,
    autoplayTimeout: 5000,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      900: { items: 4 },
      700: { items: 3 },
      0: { items: 1, center: true },
    },
  });

  $(".maps-carousel").owlCarousel({
    items:1,
    itemsDesktop:[1000,1],
    itemsDesktopSmall:[979,1],
    itemsTablet:[768,1],
    pagination:true,
    navigation:false,
    navigationText:["",""],
    slideSpeed:1000,
    singleItem:true,
    autoPlay:false
  });


  $(".pro-carousel").owlCarousel({
    items:1,
    itemsDesktop:[1000,1],
    itemsDesktopSmall:[979,1],
    itemsTablet:[768,1],
    pagination:true,
    navigation:false,
    navigationText:["",""],
    slideSpeed:1000,
    singleItem:true,
    autoPlay:false
  });

  $(".partner-carousel").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    nav: false,
    dots: false,
    slideSpeed: 10000,
    autoplaySpeed: 800,
    autoplayTimeout: 5000,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      900: { items: 6 },

      700: { items: 3 },
      // 700: { items: 3 },
      0: { items: 2 },
    },
  });

  
$(".about-carousel").owlCarousel({
  loop: true,
  nav: true,
  margin: 50,
  items: 1,
  dots: false,
  slideSpeed: 10000,
  autoplaySpeed: 800,
  autoplayTimeout: 5000,
  autoplay: true,
  // navText: [
  //     '<i class="fi-circle-arrow-left1"></i>',
  //     '<i class="fi-circle-arrow-right1"></i>'
  // ],
  responsiveClass: true,
}),


  
$(".about-carousel").owlCarousel({
  loop: true,
  nav: true,
  margin: 50,
  items: 1,
  dots: false,
  slideSpeed: 10000,
  autoplaySpeed: 800,
  autoplayTimeout: 5000,
  autoplay: true,
  // navText: [
  //     '<i class="fi-circle-arrow-left1"></i>',
  //     '<i class="fi-circle-arrow-right1"></i>'
  // ],
  responsiveClass: true,
})


//   let btn = document.querySelector(".burger-mune");
//   let nav = document.querySelector(".editnav");
//   let close = document.querySelector(".editnav .close");

//   btn.addEventListener("click", function () {
//     nav.classList.toggle("trans");
//   });
//   close.addEventListener("click", function () {
//     nav.classList.toggle("trans");
//   });
});



