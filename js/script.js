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
    });

    // select
    const element = document.querySelector('.select');
    const choices = new Choices(element, {              
        searchEnabled: false,
        itemSelectText: '',
    });

    // tabs catalog menu flags
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

});


