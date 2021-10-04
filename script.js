const navbar = document.querySelector('nav')

const scrollFn = () => {
  navbar.classList.add('onScroll')
  navbar.classList.remove('navbar2')

  if (window.scrollY === 0) {
    navbar.classList.add('navbar2')
    navbar.classList.remove('onScroll')
  }
}

document.addEventListener('scroll', scrollFn)

// const pageContainer = document.querySelector('.page-container')
// const prevBtn = document.querySelector('.prev-btn')
// const nextBtn = document.querySelector('.next-btn')
// const slides = document.querySelectorAll('.slide')

// let activeSlide = 0

// nextBtn.addEventListener('click', () => {
//   activeSlide++

//   if (activeSlide > slides.length - 1) {
//     activeSlide = 0
//   }

//   setBgToBody()
//   setActiveSlide()
// })

// prevBtn.addEventListener('click', () => {
//   activeSlide--

//   if (activeSlide < 0) {
//     activeSlide = slides.length - 1
//   }

//   setBgToBody()
//   setActiveSlide()
// })

// setBgToBody()

// function setBgToBody() {
//   pageContainer.style.backgroundImage =
//     slides[activeSlide].style.backgroundImage
// }

// function setActiveSlide() {
//   slides.forEach((slide) => slide.classList.remove('active'))

//   slides[activeSlide].classList.add('active')
// }
