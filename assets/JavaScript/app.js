// Modal open
const modal = document.querySelector('.modal')
const modalOpen = document.querySelector('.modal-slide-open')
const modalClose = document.querySelector('.modal-close')
const modalSlideClose = document.querySelector('.modal-slide-close')

modalOpen.addEventListener('click', () => {
    modal.classList.remove('close')
    modal.classList.add('open')
    modalOpen.style.display = 'none'
    modalSlideClose.style.display ='block'
})

modalClose.addEventListener('click', () => {
    modal.classList.remove('open')
    modal.classList.add('close')
    modalOpen.style.display = 'block'
    modalSlideClose.style.display ='none'
})

modalSlideClose.addEventListener('click', () => {
    modal.classList.remove('open')
    modal.classList.add('close')
    modalOpen.style.display = 'block'
    modalSlideClose.style.display ='none'
})

// Navbar Open
const headerToggle = document.querySelector('.header-navbar-toggle')
const navbar = document.querySelector('.header-navbar')

headerToggle.addEventListener('click', () => {
    navbar.classList.toggle('mobile')
})

// Slider
$(document).ready(function(){
    $('.image-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        adaptiveHeight: true,
        variableWidth: true,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2, 
                draggable: true,
                dots: false,
                variableWidth: true,

            }
          },
          {
            breakpoint: 640,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                draggable: true,
                dots: false,
            }
          }
        ]
      });
  });