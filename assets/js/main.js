!function(){transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},transEndEventName=transEndEventNames[Modernizr.prefixed("transition")],function(){function n(){if(t.hasClass("open")){t.removeClass("open"),t.addClass("close");var n=function(i){if(Modernizr.csstransitions){if(propertyName=i.originalEvent.propertyName||i.propertyName,"visibility"!==propertyName)return;t.unbind(transEndEventName,n)}t.removeClass("close")};Modernizr.csstransitions?t.bind(transEndEventName,n):n()}else t.hasClass("close")||t.addClass("open")}var i=$("#trigger-overlay-init"),t=$("div.overlay-init"),o=$("button.overlay-init-close");i.bind("click",n),o.bind("click",n),t.bind("click",n),t.find("nav li a").bind("click",function(n){n.stopPropagation()})}(),function(){function n(){if(o.hasClass("open")){o.removeClass("open"),i.removeClass("overlay-about-open"),o.addClass("close");var n=function(i){if(Modernizr.csstransitions){if(propertyName=i.originalEvent.propertyName||i.propertyName,"visibility"!==propertyName)return;o.unbind(transEndEventName,n)}o.removeClass("close")};Modernizr.csstransitions?o.bind(transEndEventName,n):n()}else o.hasClass("close")||(o.addClass("open"),i.addClass("overlay-about-open"))}var i=$("div.container"),t=$("#trigger-overlay-about"),o=$("div.overlay-about"),e=$("button.overlay-about-close");t.bind("click",n),e.bind("click",n)}()}(),function(){var n=($(document.documentElement),$(".md-overlay"));$(".md-trigger").each(function(){function i(){$(e).removeClass("md-show")}function t(){i()}var o=$(this),e=$("#"+o.attr("data-modal")),a=e.find(".md-close");o.on("click",function(){return e.addClass("md-show"),n.off("click",t),n.on("click",t),!1}),a.on("click",function(n){n.stopPropagation(),t()})})}(),function(){!function(){var n,i,t,o,e;return i=$(window),e=$(".m-ayat"),e.eq(Math.floor(Math.random()*e.length)).show(),e.click(function(){e.hide().eq(Math.floor(Math.random()*e.length)).show()}),t=$(".m-hadith"),t.hide().eq(Math.floor(Math.random()*t.length)).show(),$.stellar({horizontalScrolling:!1,hideDistantElements:!1}),o=$(".m-initiatives"),o.find(".init").hover(function(){return o.addClass("bg-"+$(this).data("init"))},function(){return o.removeClass("bg-"+$(this).data("init"))}),$(".m-cover").click(function(n){return $(".m-cover").addClass("fadeOutUpBig animated"),$("body").scrollTop(0),n.preventDefault(),!1}),n=$(".m-friends"),i.resize($.throttle(250,function(){return n.css({height:500*i.width()/1280})}))}()}.call(this);