searchForm = document.querySelector('.seacrh-form')
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

// let loginForm = document.querySelector('.login-form-container');

// document.querySelector('#login-btn').onclick = () => {
//     loginForm.classList.toggle('active');
// }
// document.querySelector('#close-login-btn').onclick = () => {
//     loginForm.classList.remove('active');
// }

// window.onscroll = () => {

//     searchForm.classList.remove('active');

//     if (window.scrollY > 80) {
//         document.querySelector('.header .header-2').classList.add('active');
//     } else {
//         document.querySelector('.header .header-2').classList.remove('active');
//     }
// }

// window.onload = () => {
//     if (window.scrollY > 80) {
//         document.querySelector('.header .header-2').classList.add('active');
//     } else {
//         document.querySelector('.header .header-2').classList.remove('active');
//     }
// }



var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  document.getElementById("header").innerHTML=`
  <div class="header-2">
          <div class="dropdown">
            <button class="dropbtn">PRODUCTS</button>
            <div class="dropdown-content">
            <a id="a1" href="productshoes.html">Shoes</a>
            <a id="a1" href="productbelt.html">Belts</a>
            <a id="a1" href="productwatches.html">Watches</a>
            <a id="a1" href="productcloth.html">Clothes</a>
            <a id="a1" href="productbreclates.html">Bracelet</a>
            <a id="a1" href="productneckless.html">Neckless</a>
            <a id="a1" href="productperfums.html">Perfume</a>
            <a id="a1" href="productcar.html">Car</a>
            <a id="a1" href="productmobile.html">Mobiles</a>
            <a id="a1" href="productbag.html">Bag</a>
            <a id="a1" href="productcuff.html">Cuff</a>
            <a id="a1" href="producttaddy.html">Taddy</a>
            <a id="a1" href="producttoy.html">Toy</a>
            <a id="a1" href="productwallet.html">Wallet</a>
            <a id="a1" href="productcap.html">Cap</a>
            </div>
          </div>
            <nav class="navbar fixed-top">
                <a id="a" href="#home">HOME</a>
                <a id="a" href="#featured">FEATURED</a>
                <a id="a" href="contactus.html">CONTACT US</a>
                <a id="a" href="aboutus.html">ABOUT US</a>
             
            </nav>
            
        </div>`


  





 









