!function(){transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},transEndEventName=transEndEventNames[Modernizr.prefixed("transition")],function(){function n(){if(o.hasClass("open")){o.removeClass("open"),o.addClass("close");var n=function(i){if(Modernizr.csstransitions){if(propertyName=i.originalEvent.propertyName||i.propertyName,"visibility"!==propertyName)return;o.unbind(transEndEventName,n)}o.removeClass("close")};Modernizr.csstransitions?o.bind(transEndEventName,n):n()}else o.hasClass("close")||o.addClass("open")}var i=$("#trigger-overlay-init"),o=$("div.overlay-init"),t=$("button.overlay-init-close");i.bind("click",n),t.bind("click",n),o.bind("click",n),o.find("nav li a").bind("click",function(n){n.stopPropagation()})}(),function(){function n(){if(t.hasClass("open")){t.removeClass("open"),i.removeClass("overlay-about-open"),t.addClass("close");var n=function(i){if(Modernizr.csstransitions){if(propertyName=i.originalEvent.propertyName||i.propertyName,"visibility"!==propertyName)return;t.unbind(transEndEventName,n)}t.removeClass("close")};Modernizr.csstransitions?t.bind(transEndEventName,n):n()}else t.hasClass("close")||(t.addClass("open"),i.addClass("overlay-about-open"))}var i=$("div.container"),o=$("#trigger-overlay-about"),t=$("div.overlay-about"),a=$("button.overlay-about-close");o.bind("click",n),a.bind("click",n)}()}(),function(){var n=($(document.documentElement),$(".md-overlay"));$(".md-trigger").each(function(){function i(){$(a).removeClass("md-show")}function o(){i()}var t=$(this),a=$("#"+t.attr("data-modal")),e=a.find(".md-close");t.on("click",function(){return a.addClass("md-show"),n.off("click",o),n.on("click",o),!1}),e.on("click",function(n){n.stopPropagation(),o()})})}(),function(){$(function(){var n,i;return i=$(".m-quran blockquote"),i.eq(Math.floor(Math.random()*i.length)).show("medium"),i.click(function(){i.hide("medium").eq(Math.floor(Math.random()*i.length)).show("medium")}),n=$(".m-hadith"),n.hide().eq(Math.floor(Math.random()*n.length)).show()})}.call(this);