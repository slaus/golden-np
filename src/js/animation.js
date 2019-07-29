console.log('text');

// Добавляем кнопке быстрого скролла вверх анимацию pulse
$(document).ready(function () {
    $("#toTop").addClass("pulse");
});

// Добавляем .services__block-block анимацию expandUp
// при прокрутке экрана
var win = $(window).width();
    if(win>767) {
        $(window).scroll(function () {
            $(".services__block").each(function () {
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 400) {
                    $(".services__block-block").addClass("expandUp");
                    $(".services__block-block").css("display", "block");
                }
            });
        });
    };


var win = $(window).width();
if(win>767) {
    $(window).scroll(function () {
        $(".team__block").each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(".team__block").addClass("slideRight");
                $(".team__block-block").css("display", "block");
            }
        });
    });
};
// Добавляем параллакс эффекты
let data = [
    {
        elem: 'first-block',
        start: 'transform:translateX(10rem)',
        finish: 'transform:translateX(0rem)'
    },
    {
        elem: 'third-block',
        start: 'transform:translateX(-10rem)',
        finish: 'transform:translateX(0rem)'
    },
    {
        elem: 'about__block-block block-text',
        start: 'opacity:0; transform:translateX(-25rem)',
        finish: 'opacity:1; transform:translateX(0)'
    },
    {
        elem: 'about__block-block block-img',
        start: 'opacity:0; transform:translateX(-25rem)',
        finish: 'opacity:1; transform:translateX(0)'
    },
    {
        elem: 'about__block-block block-text2',
        start: 'opacity:0; transform:translateX(25rem)',
        finish: 'opacity:1; transform:translateX(0)'
    },
    {
        elem: 'about__block-block block-img2',
        start: 'opacity:0; transform:translateX(25rem)',
        finish: 'opacity:1; transform:translateX(0)'
    },
    {
        elem: 'story',
        start: 'opacity:0; transform:translateY(25rem)',
        finish: 'opacity:1; transform:translateX(0)'
    }
]
// console.log(data);
var hf = window.innerHeight/4;
let hs = hf*2;

let func = (datas)=>{
    datas.forEach((elem)=>{
        let el = [].slice.call(document.getElementsByClassName(elem.elem));
        el.forEach((block)=>{
            block.setAttribute('data-'+hs+'-top',elem.start);
            block.setAttribute('data-'+hf+'-top',elem.finish);
        })
    })
};
func(data);

if(win > 1139) {
    var g = skrollr.init({forceHeight:false});
}


