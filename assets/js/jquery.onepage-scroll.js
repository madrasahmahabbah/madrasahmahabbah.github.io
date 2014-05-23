/* ===========================================================
 * jquery-onepage-scroll.js v1.2.1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create an Apple-like website that let user scroll
 * one page at a time
 *
 * Credit: Eike Send for the awesome swipe event
 * https://github.com/peachananr/onepage-scroll
 *
 * License: GPL v3
 *
 * ========================================================== */
!function(e){var n={sectionContainer:"section",easing:"ease",animationTime:1e3,pagination:!0,updateURL:!1,keyboard:!0,beforeMove:null,afterMove:null,loop:!1,responsiveFallback:!1};e.fn.swipeEvents=function(){return this.each(function(){function n(e){var n=e.originalEvent.touches;n&&n.length&&(i=n[0].pageX,t=n[0].pageY,o.bind("touchmove",a))}function a(e){var n=e.originalEvent.touches;if(n&&n.length){var s=i-n[0].pageX,d=t-n[0].pageY;s>=50&&o.trigger("swipeLeft"),-50>=s&&o.trigger("swipeRight"),d>=50&&o.trigger("swipeUp"),-50>=d&&o.trigger("swipeDown"),(Math.abs(s)>=50||Math.abs(d)>=50)&&o.unbind("touchmove",a)}}var i,t,o=e(this);o.bind("touchstart",n)})},e.fn.onepage_scroll=function(a){function i(){e(window).width()<o.responsiveFallback?(e("body").addClass("disabled-onepage-scroll"),e(document).unbind("mousewheel DOMMouseScroll"),s.swipeEvents().unbind("swipeDown swipeUp")):(e("body").hasClass("disabled-onepage-scroll")&&(e("body").removeClass("disabled-onepage-scroll"),e("html, body, .wrapper").animate({scrollTop:0},"fast")),s.swipeEvents().bind("swipeDown",function(n){e("body").hasClass("disabled-onepage-scroll")||n.preventDefault(),s.moveUp()}).bind("swipeUp",function(n){e("body").hasClass("disabled-onepage-scroll")||n.preventDefault(),s.moveDown()}),e(document).bind("mousewheel DOMMouseScroll",function(e){e.preventDefault();var n=e.originalEvent.wheelDelta||-e.originalEvent.detail;t(e,n)}))}function t(e,n){var a=n,i=(new Date).getTime();return i-lastAnimation<quietPeriod+o.animationTime?void e.preventDefault():(0>a?s.moveDown():s.moveUp(),void(lastAnimation=i))}var o=e.extend({},n,a),s=e(this),d=s.find(o.sectionContainer);if(total=d.length,status="off",topPos=0,lastAnimation=0,quietPeriod=500,paginationList="",e.fn.transformPage=function(n,a,i,t){"function"==typeof n.beforeMove&&n.beforeMove(i,t),e(this).css({transform:"translate3d(0, "+a+"%, 0)",transition:"transform "+n.animationTime+"ms "+n.easing,"-webkit-transform":"translate3d(0, "+a+"%, 0)","-webkit-transition":"-webkit-transform "+n.animationTime+"ms "+n.easing,"-moz-transform":"translate3d(0, "+a+"%, 0)","-moz-transition":"-moz-transform "+n.animationTime+"ms "+n.easing,"-ms-transform":"translate3d(0, "+a+"%, 0)","-ms-transition":"-ms-transform "+n.animationTime+"ms "+n.easing}),e(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){"function"==typeof n.afterMove&&n.afterMove(i,t)})},e.fn.moveDown=function(){var n=e(this);if(index=e(o.sectionContainer+".active").data("index"),current=e(o.sectionContainer+"[data-index='"+index+"']"),next=e(o.sectionContainer+"[data-index='"+(index+1)+"']"),next.length<1){if(1!=o.loop)return;pos=0,next=e(o.sectionContainer+"[data-index='1']")}else pos=100*index*-1;if(current.removeClass("active"),next.addClass("active"),1==o.pagination&&(e(".onepage-pagination li a[data-index='"+index+"']").removeClass("active"),e(".onepage-pagination li a[data-index='"+next.data("index")+"']").addClass("active")),e("body").removeClass(function(e,n){return(n.match(/\bviewing-page-\d+/g)||[]).join(" ")}),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==o.updateURL){var a=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(index+1);history.pushState({},document.title,a)}n.transformPage(o,pos,next.data("index"),next)},e.fn.moveUp=function(){var n=e(this);if(index=e(o.sectionContainer+".active").data("index"),current=e(o.sectionContainer+"[data-index='"+index+"']"),next=e(o.sectionContainer+"[data-index='"+(index-1)+"']"),next.length<1){if(1!=o.loop)return;pos=100*(total-1)*-1,next=e(o.sectionContainer+"[data-index='"+total+"']")}else pos=100*(next.data("index")-1)*-1;if(current.removeClass("active"),next.addClass("active"),1==o.pagination&&(e(".onepage-pagination li a[data-index='"+index+"']").removeClass("active"),e(".onepage-pagination li a[data-index='"+next.data("index")+"']").addClass("active")),e("body").removeClass(function(e,n){return(n.match(/\bviewing-page-\d+/g)||[]).join(" ")}),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==o.updateURL){var a=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(index-1);history.pushState({},document.title,a)}n.transformPage(o,pos,next.data("index"),next)},e.fn.moveTo=function(n){if(current=e(o.sectionContainer+".active"),next=e(o.sectionContainer+"[data-index='"+n+"']"),next.length>0){if(current.removeClass("active"),next.addClass("active"),e(".onepage-pagination li a.active").removeClass("active"),e(".onepage-pagination li a[data-index='"+n+"']").addClass("active"),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),pos=100*(n-1)*-1,history.replaceState&&1==o.updateURL){var a=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(n-1);history.pushState({},document.title,a)}s.transformPage(o,pos,n,next)}},s.addClass("onepage-wrapper").css("position","relative"),e.each(d,function(n){e(this).addClass("ops-section").attr("data-index",n+1),topPos+=100,1==o.pagination&&(paginationList+="<li><a data-index='"+(n+1)+"' href='#"+(n+1)+"'></a></li>")}),s.swipeEvents().bind("swipeDown",function(n){e("body").hasClass("disabled-onepage-scroll")||n.preventDefault(),s.moveUp()}).bind("swipeUp",function(n){e("body").hasClass("disabled-onepage-scroll")||n.preventDefault(),s.moveDown()}),1==o.pagination&&(e("<ul class='onepage-pagination'>"+paginationList+"</ul>").prependTo("body"),posTop=s.find(".onepage-pagination").height()/2*-1,s.find(".onepage-pagination").css("margin-top",posTop)),""!=window.location.hash&&"#1"!=window.location.hash){if(init_index=window.location.hash.replace("#",""),e(o.sectionContainer+"[data-index='"+init_index+"']").addClass("active"),e("body").addClass("viewing-page-"+init_index),1==o.pagination&&e(".onepage-pagination li a[data-index='"+init_index+"']").addClass("active"),next=e(o.sectionContainer+"[data-index='"+init_index+"']"),next&&(next.addClass("active"),1==o.pagination&&e(".onepage-pagination li a[data-index='"+init_index+"']").addClass("active"),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==o.updateURL)){var r=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+init_index;history.pushState({},document.title,r)}pos=100*(init_index-1)*-1,s.transformPage(o,pos,init_index)}else e(o.sectionContainer+"[data-index='1']").addClass("active"),e("body").addClass("viewing-page-1"),1==o.pagination&&e(".onepage-pagination li a[data-index='1']").addClass("active");return 1==o.pagination&&e(".onepage-pagination li a").click(function(){var n=e(this).data("index");s.moveTo(n)}),e(document).bind("mousewheel DOMMouseScroll",function(n){n.preventDefault();var a=n.originalEvent.wheelDelta||-n.originalEvent.detail;e("body").hasClass("disabled-onepage-scroll")||t(n,a)}),0!=o.responsiveFallback&&(e(window).resize(function(){i()}),i()),1==o.keyboard&&e(document).keydown(function(n){var a=n.target.tagName.toLowerCase();if(!e("body").hasClass("disabled-onepage-scroll"))switch(n.which){case 33:case 38:"input"!=a&&"textarea"!=a&&s.moveUp();break;case 32:case 34:case 40:"input"!=a&&"textarea"!=a&&s.moveDown();break;default:return}}),!1}}(window.jQuery);