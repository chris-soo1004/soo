
// h_mid .ham 클릭시 펼쳐지는 효과
let t_ham = document.querySelector('header .h_mid .h_mid_i .logo .logo_icon .ham');
let t_drawer = document.querySelector('header .h_mid .h_mid_i .logo .t_menu_drawer');
let t_x = document.querySelector('header .h_mid .h_mid_i .logo .t_menu_drawer i');
let overlay = document.querySelector('.menu_overlay');
$(function(){
  
  $(t_drawer).hide();
  $(overlay).hide();

  $(t_ham).on('click', function(){
    $(t_drawer).stop().toggle();
    $(overlay).stop().toggle();
  });

  $(t_x).on('click',function(){
    $(t_drawer).toggle();
    $(overlay).toggle();
  });
  
});






// h_bottom .ham 클릭시 펼쳐지는 효과
let ham = document.querySelector('header .h_bottom .ham');
let drawer = document.querySelector('header .h_bottom .menu_drawer');

// ham.addEventListener('click', () => {
//   drawer.classList.toggle('open');
// });
$(function(){
  
  $(drawer).hide();
  $(ham).on('click', function(){
    $(drawer).stop().slideToggle();
  });

});




// h_section 배너 슬라이드
let currentSlide = 1;
const totalSlides = 4;
const slideWrapper = document.getElementById('slideWrapper');
const sliderContainer = document.querySelector('.h_section_i');


slideWrapper.style.transform = `translateX(-${100 / 6}%)`;

function updateSlide() {
  const translateX = -currentSlide * (100 / 6);
  slideWrapper.style.transform = `translateX(${translateX}%)`;
}


function changeSlide(direction) {
  currentSlide += direction;

  slideWrapper.style.transition = 'transform 0.5s ease-in-out';
  updateSlide();


  
  setTimeout(() => {
    if (currentSlide >= totalSlides + 1) {
      
      currentSlide = 1;
      slideWrapper.style.transition = 'none';
      updateSlide();
    } else if (currentSlide <= 0) {
      
      currentSlide = totalSlides;
      slideWrapper.style.transition = 'none';
      updateSlide();
    }
  }, 500); 
}


let startX = 0;
let endX = 0;

sliderContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', () => {
  const difference = startX - endX;
  const threshold = 50;

  if (Math.abs(difference) > threshold) {
    if (difference > 0) {
      changeSlide(1);
    } else {
      changeSlide(-1);
    }
  }
});


// best 슬라이드



// goods 슬라이드 효과
let currentGoodsSlide = 1;
const goodsSlideWrapper = document.getElementById('goodsSlideWrapper');
const goodsBoxes = document.querySelectorAll('.goods_box');
const totalGoodsItems = goodsBoxes.length - 2;
const goodsItemWidth = 400;



goodsSlideWrapper.style.transform = `translateX(-${goodsItemWidth}px)`;

function changeGoodsSlide(direction) {
  currentGoodsSlide += direction;

 
  goodsSlideWrapper.style.transition = 'transform 0.32s cubic-bezier(0.77, 0, 0.175, 1)';
  const translateX = -currentGoodsSlide * goodsItemWidth;
  goodsSlideWrapper.style.transform = `translateX(${translateX}px)`;

  
  goodsSlideWrapper.addEventListener('transitionend', () => {
    if (currentGoodsSlide >= totalGoodsItems + 1) {
      
      currentGoodsSlide = 1;
      goodsSlideWrapper.style.transition = 'none';
      goodsSlideWrapper.style.transform = `translateX(-${goodsItemWidth}px)`;
    } else if (currentGoodsSlide <= 0) {
      
      currentGoodsSlide = totalGoodsItems;
      goodsSlideWrapper.style.transition = 'none';
      goodsSlideWrapper.style.transform = `translateX(-${currentGoodsSlide * goodsItemWidth}px)`;
    }
  }, 500); 
}


let starttX = 0;
let enddX = 0;
const goodsContainer = document.querySelector('.goods_contents');

goodsContainer.addEventListener('touchstart', (e) => {
  starttX = e.touches[0].clientX;
});

goodsContainer.addEventListener('touchmove', (e) => {
  enddX = e.touches[0].clientX;
});

goodsContainer.addEventListener('touchend', () => {
  const difference = starttX - enddX;
  const threshold = 50;

  if (Math.abs(difference) > threshold) {
    if (difference > 0) {
      changeGoodsSlide(1);
    } else {
      changeGoodsSlide(-1);
    }
  }
});






// top버튼
$(function () {
  $(".top").on('click', function () {
    $(window).scrollTop(0)
  });

});