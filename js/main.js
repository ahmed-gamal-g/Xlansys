// start slider
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// end slider



// start nav position
let navWebsite = document.querySelector(".nav-website")

window.onscroll = function () {

  if (this.scrollY >= 130) {
    navWebsite.style.cssText = `
    width: 100%;
    position: fixed;
    background-color: white;
    box-shadow: rgb(232 74 36 / 8%) 0px 5px 5px !important;
    z-index: 10000;
    /* position: absolute; */
    top: 0;
    `
  } else {
    navWebsite.style.cssText = `
    width: 100%;
    position: initial;
    background-color: white;
    box-shadow: 0 0 0 white;
    z-index: 10000;
    /* position: absolute; */
    top: 0;
    `
  }
}
// end nav position


// start nav active
$(document).on("click", "ul li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
// end nav active
