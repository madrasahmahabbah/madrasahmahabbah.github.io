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
!function(e){var a={sectionContainer:"section",easing:"ease",animationTime:1e3,pagination:!0,updateURL:!1,keyboard:!0,beforeMove:null,afterMove:null,loop:!1,responsiveFallback:!1};e.fn.swipeEvents=function(){return this.each(function(){function a(e){var a=e.originalEvent.touches;a&&a.length&&(i=a[0].pageX,t=a[0].pageY,o.bind("touchmove",n))}function n(e){var a=e.originalEvent.touches;if(a&&a.length){var s=i-a[0].pageX,d=t-a[0].pageY;s>=50&&o.trigger("swipeLeft"),-50>=s&&o.trigger("swipeRight"),d>=50&&o.trigger("swipeUp"),-50>=d&&o.trigger("swipeDown"),(Math.abs(s)>=50||Math.abs(d)>=50)&&o.unbind("touchmove",n)}}var i,t,o=e(this);o.bind("touchstart",a)})},e.fn.onepage_scroll=function(n){function i(){e(window).width()<o.responsiveFallback?(e("body").addClass("disabled-onepage-scroll"),e(document).unbind("mousewheel DOMMouseScroll"),s.swipeEvents().unbind("swipeDown swipeUp")):(e("body").hasClass("disabled-onepage-scroll")&&(e("body").removeClass("disabled-onepage-scroll"),e("html, body, .wrapper").animate({scrollTop:0},"fast")),s.swipeEvents().bind("swipeDown",function(a){e("body").hasClass("disabled-onepage-scroll")||a.preventDefault(),s.moveUp()}).bind("swipeUp",function(a){e("body").hasClass("disabled-onepage-scroll")||a.preventDefault(),s.moveDown()}),e(document).bind("mousewheel DOMMouseScroll",function(e){e.preventDefault();var a=e.originalEvent.wheelDelta||-e.originalEvent.detail;t(e,a)}))}function t(e,a){var n=a,i=(new Date).getTime();return i-lastAnimation<quietPeriod+o.animationTime?void e.preventDefault():(0>n?s.moveDown():s.moveUp(),void(lastAnimation=i))}var o=e.extend({},a,n),s=e(this),d=s.find(o.sectionContainer);if(total=d.length,status="off",topPos=0,lastAnimation=0,quietPeriod=500,paginationList="",e.fn.transformPage=function(a,n,i,t){"function"==typeof a.beforeMove&&a.beforeMove(i,t),e(this).css({"-webkit-transform":"translate3d(0, "+n+"%, 0)","-webkit-transition":"-webkit-transform "+a.animationTime+"ms "+a.easing,"-moz-transform":"translate3d(0, "+n+"%, 0)","-moz-transition":"-moz-transform "+a.animationTime+"ms "+a.easing,"-ms-transform":"translate3d(0, "+n+"%, 0)","-ms-transition":"-ms-transform "+a.animationTime+"ms "+a.easing,transform:"translate3d(0, "+n+"%, 0)",transition:"transform "+a.animationTime+"ms "+a.easing}),e(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){"function"==typeof a.afterMove&&a.afterMove(i,t)})},e.fn.moveDown=function(){var a=e(this);if(index=e(o.sectionContainer+".active").data("index"),current=e(o.sectionContainer+"[data-index='"+index+"']"),next=e(o.sectionContainer+"[data-index='"+(index+1)+"']"),next.length<1){if(1!=o.loop)return;pos=0,next=e(o.sectionContainer+"[data-index='1']")}else pos=100*index*-1;if(current.removeClass("active"),next.addClass("active"),1==o.pagination&&(e(".onepage-pagination li a[data-index='"+index+"']").removeClass("active"),e(".onepage-pagination li a[data-index='"+next.data("index")+"']").addClass("active")),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==o.updateURL){var n=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(index+1);history.pushState({},document.title,n)}a.transformPage(o,pos,next.data("index"),next)},e.fn.moveUp=function(){var a=e(this);if(index=e(o.sectionContainer+".active").data("index"),current=e(o.sectionContainer+"[data-index='"+index+"']"),next=e(o.sectionContainer+"[data-index='"+(index-1)+"']"),next.length<1){if(1!=o.loop)return;pos=100*(total-1)*-1,next=e(o.sectionContainer+"[data-index='"+total+"']")}else pos=100*(next.data("index")-1)*-1;if(current.removeClass("active"),next.addClass("active"),1==o.pagination&&(e(".onepage-pagination li a[data-index='"+index+"']").removeClass("active"),e(".onepage-pagination li a[data-index='"+next.data("index")+"']").addClass("active")),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==o.updateURL){var n=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(index-1);history.pushState({},document.title,n)}a.transformPage(o,pos,next.data("index"),next)},e.fn.moveTo=function(a){if(current=e(o.sectionContainer+".active"),next=e(o.sectionContainer+"[data-index='"+a+"']"),next.length>0){if(current.removeClass("active"),next.addClass("active"),e(".onepage-pagination li a.active").removeClass("active"),e(".onepage-pagination li a[data-index='"+a+"']").addClass("active"),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),pos=100*(a-1)*-1,history.replaceState&&1==o.updateURL){var n=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(a-1);history.pushState({},document.title,n)}s.transformPage(o,pos,a,next)}},s.addClass("onepage-wrapper").css("position","relative"),e.each(d,function(a){e(this).addClass("ops-section").attr("data-index",a+1),topPos+=100,1==o.pagination&&(paginationList+="<li><a data-index='"+(a+1)+"' href='#"+(a+1)+"'></a></li>")}),s.swipeEvents().bind("swipeDown",function(a){e("body").hasClass("disabled-onepage-scroll")||a.preventDefault(),s.moveUp()}).bind("swipeUp",function(a){e("body").hasClass("disabled-onepage-scroll")||a.preventDefault(),s.moveDown()}),1==o.pagination&&(e("<ul class='onepage-pagination'>"+paginationList+"</ul>").prependTo("body"),posTop=s.find(".onepage-pagination").height()/2*-1,s.find(".onepage-pagination").css("margin-top",posTop)),""!=window.location.hash&&"#1"!=window.location.hash){if(init_index=window.location.hash.replace("#",""),e(o.sectionContainer+"[data-index='"+init_index+"']").addClass("active"),e("body").addClass("viewing-page-"+init_index),1==o.pagination&&e(".onepage-pagination li a[data-index='"+init_index+"']").addClass("active"),next=e(o.sectionContainer+"[data-index='"+init_index+"']"),next&&(next.addClass("active"),1==o.pagination&&e(".onepage-pagination li a[data-index='"+init_index+"']").addClass("active"),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+next.data("index")),history.replaceState&&1==o.updateURL)){var r=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+init_index;history.pushState({},document.title,r)}pos=100*(init_index-1)*-1,s.transformPage(o,pos,init_index)}else e(o.sectionContainer+"[data-index='1']").addClass("active"),e("body").addClass("viewing-page-1"),1==o.pagination&&e(".onepage-pagination li a[data-index='1']").addClass("active");return 1==o.pagination&&e(".onepage-pagination li a").click(function(){var a=e(this).data("index");s.moveTo(a)}),e(document).bind("mousewheel DOMMouseScroll",function(a){a.preventDefault();var n=a.originalEvent.wheelDelta||-a.originalEvent.detail;e("body").hasClass("disabled-onepage-scroll")||t(a,n)}),0!=o.responsiveFallback&&(e(window).resize(function(){i()}),i()),1==o.keyboard&&e(document).keydown(function(a){var n=a.target.tagName.toLowerCase();if(!e("body").hasClass("disabled-onepage-scroll"))switch(a.which){case 38:"input"!=n&&"textarea"!=n&&s.moveUp();break;case 32:case 40:"input"!=n&&"textarea"!=n&&s.moveDown();break;default:return}}),!1}}(window.jQuery);