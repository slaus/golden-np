'use strict';

console.log('test');

// Задаем скорость перехода по ссылкам главного меню
var $root = $('html, body');
$('a').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        window.location.hash = href;
    });
    return false;
});

// Появление banner__text через 2сек. после загрузки страницы
$(document).ready(function () {
    setTimeout(function () {
        $('.banner-text').css({
            opacity: 1
        });
    }, 2000);
});

// Задаем появление кпопки быстрого скролла вверх при скролле страницы вниз
// и время, за которое страница проскролется к началу.
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});