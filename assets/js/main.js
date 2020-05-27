/*
 * Title:   Paradise Garden - Gardening and Landscaping - HTML Template
 * Author:  QTC Media
 */

/* --------------------------------------------------------
 [Table of contents]

 1. revolutionSlider
 2. mobileMenu
 3. childMobileMenu
 4. owlCarousel
 5. stickyHeader
 6. slickSlider
 7. backToTop
 8. clickToTop
 9. countToNumber
 10. offCanvas
 11. borderWidth
 12. toggleMainMenu
 13. initMap
 14. subContentQuestion
 15. hoverdirMaster
 16. countDown
 17. qtyProduct
 18. raTing

 [End table of contents]
 ----------------------------------------------------------------------- */

"use strict"; // Start of use strict

function revolutionSlider() {
    if($('#slider').length) {
        jQuery("#slider").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1183, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [800, 700, 600, 500, 500]
        });
    }
    
    if($('#slider-v2').length) {
        jQuery("#slider-v2").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1183, 975, 751, 463],
            gridwidth: [1170,980],
            gridheight: [880, 780, 580, 580, 480]
        });
    }
    
    if($('#slider-v3').length) {
        jQuery("#slider-v3").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 600000,
            navigation: {
                onHoverStop: "on",
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 751,
                    style: "hermes",
                    hide_onleave: false,
                    direction: "horizontal",
                    container: "layergrid",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 60,
                    space: 12,
                    tmp: ''
                }
            },
            responsiveLevels: [1920, 1183, 975, 751, 463],
            gridwidth: [1170,980],
            gridheight: [880, 780, 580, 580, 480]
        });
    }
    
    if($('#slider-v4').length) {
        jQuery("#slider-v4").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on",
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 751,
                    style: "hermes",
                    hide_onleave: false,
                    direction: "horizontal",
                    container: "layergrid",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 12,
                    tmp: ''
                }
            },
            responsiveLevels: [1920, 1183, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [800, 800, 600, 500, 400]
        });
    }
}

function mobileMenu() {
    if ($('.bar-mobile').length) {
        $('.bar-mobile').on('click', function () {
            $('.mobile-menu').slideToggle(300, 'linear');
            $('.bar-mobile').toggleClass('open');
            return false;
        });
    }
}

function childMobileMenu() {
    if ($('.nav-holder').length) {
        $('.nav-holder li.has-submenu').children('a').append(function () {
            return '<button class="dropdown-expander"><span class="fa fa-chevron-down"></span></button>';
        });
        
        $('.nav-holder .dropdown-expander').on('click', function () {
            if($(this).parent().parent().hasClass('active')) {
                $(this).parent().parent().children('.submenu').slideToggle();
                $(this).find('span').toggleClass('fa-chevron-down fa-chevron-up');
                $(this).parent('a').parent('li').toggleClass('active');
            }
            else {
                $('.nav-holder li.has-submenu .submenu').slideUp();
                $('.nav-holder li.has-submenu').removeClass('active');
                $('.nav-holder li.has-submenu .dropdown-expander').find('span').removeClass('fa-chevron-up');
                $('.nav-holder li.has-submenu .dropdown-expander').find('span').addClass('fa-chevron-down');
                $(this).parent().parent().addClass('active');
                $(this).find('span').removeClass('fa-chevron-down');
                $(this).find('span').addClass('fa-chevron-up');
                $(this).parent().parent().children('.submenu').slideDown();
            }
            return false;
        });
    }
}

function owlCarousel() {
    if($('.loop-one').length) {
        $('.loop-one').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    
    if($('.loop-two').length) {
        $('.loop-two').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: false,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    
    if($('.loop-three').length) {
        $('.loop-three').owlCarousel({
            center: false,
            items: 2,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    }
    
    if($('.loop-four').length) {
        $('.loop-four').owlCarousel({
            center: false,
            items: 5,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }
    
    if($('.loop-five').length) {
        $('.loop-five').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    
    if($('.loop-six').length) {
        $('.loop-six').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    
    if($('.loop-seven').length) {
        $('.loop-seven').owlCarousel({
            center: false,
            items: 1,
            nav: true,
            navText: ['',''],
            loop: true,
            margin: 0,
            autoplay: true
        });
    }
    
    if($('.loop-eight').length) {
        $('.loop-eight').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    
    if($('.loop-nine').length) {
        $('.loop-nine').owlCarousel({
            center: false,
            items: 4,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }
    
    if($('.loop-ten').length) {
        $('.loop-ten').owlCarousel({
            center: false,
            items: 1,
            nav: false,
            loop: true,
            margin: 0,
            autoplay: true
        });
    }
    
    if($('.loop-eleven').length) {
        $('.loop-eleven').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
}

function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').removeClass('fadeIn animated');
            $('.stricky').addClass('stricky-fixed fadeInDown animated');
        }
        else {
            $('.stricky').removeClass('stricky-fixed fadeInDown animated');
            $('.stricky').addClass('slideIn animated');
        }
    }
   ;
}

function slickSlider() {
    if($('.slick-our-projects').length) {
        $('.slick-our-projects').slick({
            dots: false,
            variableWidth: true,
            autoplay: true,
            arrows: false,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        centerMode: false,
                        variableWidth: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                        variableWidth: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: false,
                        variableWidth: false
                    }
                }
            ]
        });
        
        var filtered = false;
        $('#our_projects .button-filter').on('click', function(){
            var filtername = $(this).attr('id');
            if (filtered === false) {
                $('.slick-our-projects').slick('slickUnfilter');
                $('.slick-our-projects').slick('slickFilter','.filter-' + filtername);
                $('#our_projects .button-filter').attr('class','button-filter');
                $(this).attr('class','active button-filter');
                return false;
            } else {
                $('.slick-our-projects').slick('slickUnfilter');
                $('.slick-our-projects').slick('slickFilter','.filter-' + filtername);
                $('.slick-our-projects').slickGoTo(0);
                $('#our_projects .button-filter').attr('class','button-filter');
                $(this).attr('class','active button-filter');
                filtered = false;
                return false;
            }
        });
    }
    
    if($('.slick-our-projects-v2').length) {
        $('.slick-our-projects-v2').slick({
            dots: true,
            variableWidth: false,
            autoplay: true,
            infinite: true,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1220,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        
        var filtered = false;
        $('#our_projects .button-filter').on('click', function(){
            var filtername = $(this).attr('id');
            if (filtered === false) {
                $('.slick-our-projects-v2').slick('slickUnfilter');
                $('.slick-our-projects-v2').slick('slickFilter','.filter-' + filtername);
                $('#our_projects .button-filter').attr('class','button-filter');
                $(this).attr('class','active button-filter');
                return false;
            } else {
                $('.slick-our-projects-v2').slick('slickUnfilter');
                $('.slick-our-projects-v2').slick('slickFilter','.filter-' + filtername);
                $('.slick-our-projects-v2').slickGoTo(0);
                $('#our_projects .button-filter').attr('class','button-filter');
                $(this).attr('class','active button-filter');
                filtered = false;
                return false;
            }
        });
    }
}

function backToTop() {
    if ($('.backtotop').length) {
        var scrollTrigger = 700,
        backTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.backtotop').addClass('show-backtotop');
            } else {
                $('.backtotop').removeClass('show-backtotop');
            }
        };
        
        $(window).on('scroll', function () {
            backTop();
        });
    }
}

function clickToTop() {
    if ($('.backtotop').length) {
        $('.backtotop').on('click', function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            
            return false;
        });
    }
}

function countToNumber() {
    if($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
}

function offCanvas() {
    if ($('#offcanvas_menu').length) {
        $('#offcanvas_menu').on('click', function () {
            $('#main_menu').addClass('offcanvas-show');
            $('.mark-window').show();
            $('body').addClass('offcanvas-page');
            return false;
        });
        
        $('.mark-window').on('click', function () {
            $('#main_menu').removeClass('offcanvas-show');
            $('.mark-window').hide();
            $('body').removeClass('offcanvas-page');
            return false;
        });
    }
}

function borderWidth() {
    if($('.border-width-auto').length) {
        var wSection = $('.border-width-auto').width() / 2;
        $('.border-width-auto .border-width').css({'border-left-width' : wSection + 'px'});
        $('.border-width-auto .border-width').css({'border-right-width' : wSection + 'px'});
        
        $(window).resize(function() {
            borderWidth();
        });
    }
}

function toggleMainMenu() {
    if($('#menu_bars').length) {
        $('#menu_bars').on('click', function() {
            $(this).toggleClass('open');
            $('.header .main-menu .menu').toggle(500);
            return false;
        });
    }
}

function initMap() {
    if ($('.google-map').length) {
        var locations = [
            ['Paradise Garden - Gardening and Landscaping - HTML Template', 40.712784, -74.005941, 1]
        ];
        
        var map = new google.maps.Map(document.getElementById('gmap_contact'), {
            zoom: 13,
            center: new google.maps.LatLng(40.712784, -74.005941),
			scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP 
        });
        
        var infowindow = new google.maps.InfoWindow();
        
        var marker, i;
        
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });
            
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    };
}

function subContentQuestion() {
    if ($('.holder-question').length) {
        if($('.holder-question li').hasClass('active')) {
            $(this).children('.sub-content').slideDown();
            $(this).children('a').children('span').attr('class', 'fa fa-minus');
        }
        $('.holder-question .has-title a').on('click', function () {
            if($(this).parent().hasClass('active')) {
                return false;
            }
            else {
                $('.holder-question .has-title .sub-content').slideUp();
                $('.holder-question .has-title').removeClass('active');
                $('.holder-question .has-title a').find('span').removeClass('fa-minus');
                $('.holder-question .has-title a').find('span').addClass('fa-plus');
                $(this).parent().addClass('active');
                $(this).find('span').removeClass('fa-plus');
                $(this).find('span').addClass('fa-minus');
                $(this).siblings('.sub-content').slideDown();
            }
            return false;
        });
    }
}

function hoverdirMaster() {
    if($('#da-thumbs').length) {
        $('#da-thumbs .garden-box-hv-dir').hoverdir();
    }
}

function countDown() {
    if($('.count-down').length) {
        $('.count-down').countdown({
            date: '2018-06-21',
            offset: -8
        });
    }
}

function qtyProduct() {
    if($('.box-qty').length) {
        $('.box-qty .qty-plus').on('click', function() {
            var $button = $(this);
            var intValue = $button.parent().find('.qty-number').val();
            $button.parent().find('.qty-number').val(parseInt(intValue, 10) + 1);
            return false;
        });
        
        $('.box-qty .qty-minus').on('click', function() {
            var $button = $(this);
            var intValue = $button.parent().find('.qty-number').val();
            if (parseInt(intValue, 10) > 1) {
                $button.parent().find('.qty-number').val(parseInt(intValue, 10) - 1);
            }
            return false;
        });
        
        $('.qty-number').on('blur', function () {
            var $button = $(this);
            if ($button.parent().find('.qty-number').val() === "" || parseInt($button.parent().find('.qty-number').val(), 10) === 0) {
                $button.parent().find('.qty-number').val("1");
            }
        });
        $('.qty-number').on('keypress', function (evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        });
    }
}

function raTing() {
    if ($('#rateYo').length) {
        $("#rateYo").rateYo({
            rating: 3,
            halfStar: true,
            ratedFill: "#fab102"
        });
    }
}

// instance of fuction while Document ready event
jQuery(document).on('ready', function () {
    (function ($) {
        revolutionSlider();
        mobileMenu();
        childMobileMenu();
        owlCarousel();
        slickSlider();
        clickToTop();
        countToNumber();
        offCanvas();
        toggleMainMenu();
        subContentQuestion();
        hoverdirMaster();
        countDown();
        qtyProduct();
        raTing();
    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () {
   (function ($) {
      stickyHeader();
      backToTop();
   })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function () {
   (function ($) {
      borderWidth();
   })(jQuery);
});