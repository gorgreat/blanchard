window.addEventListener('DOMContentLoaded', function() {

    var mySwiper = new Swiper('.swiper-container', {
        loop: true
    });
  
    var mySwiper = new Swiper('.gallery__slider', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
               slidesPerView: 1,
            //   spaceBetween: 20,
            },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            // 1024: {
            //   slidesPerView: 2,
            //   spaceBetween: 50,
            // },
          }        
    });

    var mySwiper = new Swiper('.publication-slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 75,
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 50,
            },            
        }          
    });

    var mySwiper = new Swiper('.partners__slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 70,
        navigation: {
            nextEl: '.partners__slider-next',
            prevEl: '.partners__slider-prev',
        },
        breakpoints: {
            320: {
               slidesPerView: 1,
            },
            768: {
               slidesPerView: 2,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 70,
            },       
            1600: {
                slidesPerView: 3,
                spaceBetween: 70,
            },                   
          }          
    });

    // select
    const element = document.querySelector('.select');
    const choices = new Choices(element, {              
        searchEnabled: false,
        itemSelectText: '',
    });

    // tabs
    ;(function() {
        'use strict';
        var tabsmenu = document.querySelectorAll('.catalog__countries-items');
        if (!tabsmenu) return;
        [].forEach.call(tabsmenu, function(menu) {
            menu.addEventListener('click', function(e) {
                // if (e.target.tagName != 'LI') return;
                var currIndex = switchTab(menu, e.target);
                switchBlock(menu, currIndex);
            })
        });

        function switchTab(menu, tab) {
            var items = menu.querySelectorAll('.flag-link'),
                currIndex;

            [].forEach.call(items, function(item, index) {
                item.classList.remove('flag-link_active');
                if (item === tab) {
                    item.classList.add('flag-link_active');
                    currIndex = index;
                }
            });
            return currIndex;
        }

        function switchBlock(menu, currIndex) {
            // var content	= menu.nextElementSibling,
                var blocks = document.querySelectorAll('.catalog__tab-decription');

            [].forEach.call(blocks, function(block, index) {
                block.classList.remove('catalog__tab-decription_active');
                if (index == currIndex) block.classList.add('catalog__tab-decription_active');
            });
        }
    }
    )();

    //плавно по якорям
    let linkNav = document.querySelectorAll('[href^="#"]'), 
    V = .4;  
    for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1');  
            t = document.querySelector(hash).getBoundingClientRect().top, 
            start = null;
        requestAnimationFrame(step);  
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  
            }
        }
        }, false);
    }

    //карта
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.758463, 37.601079],
            zoom: 18
        });
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Шоурум №4. Леонтьевский переулок, дом 5, строение 1',
            balloonContent: ''
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../image/mdi_location_on.png',
            iconImageSize: [20, 20],
            iconImageOffset: [0, 0]
        }),
        myMap.geoObjects.add(myPlacemark);
    };

    // simplebar
    new SimpleBar(document.getElementById('simplebar'));

        //inputmask
    var selector = document.getElementById("tel");
    var im = new Inputmask("+7(999)-999-99-99");
    im.mask(selector);

    //validate
    new JustValidate('.callback', {
        rules: {
            name: {
                required: true,
            },
            tel: {
                required: true
            },

        },
        messages: {
            name: 'Как вас зовут?',
            tel: 'Укажите ваш телефон',
        },
            colorWrong: '#ff0000'
    });

    // /события 
    let eventsListRow = document.querySelector(".events__list-row");
    let eventsAllBtn = document.querySelector(".events__all");

    eventsAllBtn.addEventListener("click", function(e) {
        e.preventDefault();
        eventsListRow.classList.add("events__list-row-active");
        eventsAllBtn.classList.add("events__all_hide");
    });

    /*табы художники*/
    let authorDescription = document.querySelectorAll(".author__description");
    let authorListLink = document.querySelectorAll(".author__list-item-link");


	[].forEach.call(authorListLink, function(link) {
		link.addEventListener('click', function(e) {
            e.preventDefault();

            for (i = 0; i < authorListLink.length; i++ ) {
                authorListLink[i].classList.remove("author__list-item-link-active");
            }

            for (i = 0; i < authorDescription.length; i++ ) {
                authorDescription[i].classList.remove("author__description_active");
            }

            for (let i = 0; i < authorDescription.length; i++) {               
                 if ( authorDescription[i].getAttribute("data-id") === this.getAttribute("data-id") ) {
                     authorDescription[i].classList.add("author__description_active");               
                 }
            }
            
            this.classList.add("author__list-item-link-active");

		});
	});

});


