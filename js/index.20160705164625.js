(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

function sm(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})}
function em1(){var c="bzbo/tuvezApvumppl/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);location.href=addr;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? ((dpi>2) ? 'images/logo-120.png' : 'images/logo-80.png') : 'images/logo-40.png');
var a='data-src'; if($('.js-2').hasAttr('src')) { a='src'; } $('.js-2').attr(a, (dpi>1) ? 'images/diploma_1-92.png' : 'images/diploma_1-46.png');
var a='data-src'; if($('.js-8').hasAttr('src')) { a='src'; } $('.js-8').attr(a, (dpi>1) ? ((dpi>2) ? 'images/diploma_1-108.png' : 'images/diploma_1-72.png') : 'images/diploma_1-36.png');
var a='data-src'; if($('.js-15').hasAttr('src')) { a='src'; } $('.js-15').attr(a, (dpi>1) ? ((dpi>2) ? 'images/diploma_1-108.png' : 'images/diploma_1-72.png') : 'images/diploma_1-36.png');};
if(!window.HTMLPictureElement){r();}
sm();
initMenu($('#menu-1')[0]);
$('.cont').Stickyfill();
$('.js-2').unveil(50);
$('.js-22 source').unveil(50);
$('.js-8').unveil(50);
$('.js-23 source').unveil(50);
$('.js-15').unveil(50);
$('.js-24 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-3')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-4')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-5')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-6')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-7')[0], "1.50s", "0.00s", 1, 100);
wl.addAnimation($('.js-8')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-9')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-10')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-11')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-13')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-14')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-15')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-16')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-17')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-18')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-19')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-20')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-21')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});