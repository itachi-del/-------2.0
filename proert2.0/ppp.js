let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
     searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
   
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.re
document.querySelector('.btn').addEventListener('click', function(event) {
  event.preventDefault();
  const cardNumber = document.getElementById('card-number').value;
  const cardHolder = document.getElementById('card-holder').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const cvv = document.getElementById('cvv').value;

  if (cardNumber && cardHolder && expiryDate && cvv) {
      // Отправка данных на сервер или дальнейшая обработка
      alert('Карта добавлена!');
  } else {
      alert('Please fill in all fields.');
  }
});
move('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    centeredSlides: true,
    breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});


var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    centeredSlides: true,
    breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

let container = document.getElementById('container')
let imgDalate = document.getElementById('imgDalate')

imgDalate.addEventListener('click', function(){
  container.style.display = 'none'
})




