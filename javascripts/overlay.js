(function() {

  transEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd',
    'transition': 'transitionend'
  },
  transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];


  // Movements Overlay

  (function() {
    var triggerBttn = $('#trigger-overlay-mvmt'),
      overlay = $('div.overlay-mvmt'),
      closeBttn = $('button.overlay-mvmt-close');

    function toggleOverlay() {
      if (overlay.hasClass('open')) {
        overlay.removeClass('open');
        overlay.addClass('close');
        var onEndTransitionFn = function(ev) {
          if (Modernizr.csstransitions) {
            propertyName = ev.originalEvent.propertyName || ev.propertyName;
            if (propertyName !== 'visibility') return;
            overlay.unbind(transEndEventName, onEndTransitionFn);
          }
          overlay.removeClass('close');
        };
        if (Modernizr.csstransitions) {
          overlay.bind(transEndEventName, onEndTransitionFn);
        }
        else {
          onEndTransitionFn();
        }
      }
      else if (!overlay.hasClass('close')) {
        overlay.addClass('open');
      }
    }

    triggerBttn.bind('click', toggleOverlay);
    closeBttn.bind('click', toggleOverlay);
    overlay.bind('click', toggleOverlay);

    overlay.find('nav li a').bind('click', function(ev) {
      ev.stopPropagation();
    });
  })();


  // About Us Overlay

  (function() {
    var container = $('div.container'),
      triggerBttn = $('#trigger-overlay-about'),
      overlay = $('div.overlay-about'),
      closeBttn = $('button.overlay-about-close');

    function toggleOverlay() {
      if (overlay.hasClass('open')) {
        overlay.removeClass('open');
        container.removeClass('overlay-about-open');
        overlay.addClass('close');
        var onEndTransitionFn = function(ev) {
          if (Modernizr.csstransitions) {
            propertyName = ev.originalEvent.propertyName || ev.propertyName;
            if (propertyName !== 'visibility') return;
            overlay.unbind(transEndEventName, onEndTransitionFn);
          }
          overlay.removeClass('close');
        };
        if (Modernizr.csstransitions) {
          overlay.bind(transEndEventName, onEndTransitionFn);
        }
        else {
          onEndTransitionFn();
        }
      }
      else if (!overlay.hasClass('close')) {
        overlay.addClass('open');
        container.addClass('overlay-about-open');
      }
    }

    triggerBttn.bind('click', toggleOverlay);
    closeBttn.bind('click', toggleOverlay);
    // overlay.bind('click', toggleOverlay);

    // overlay.find('nav li a').bind('click', function(ev) {
    //   ev.stopPropagation();
    // });
  })();

})();
