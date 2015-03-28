(function() {
  'use strict';

  $("[data-event='referral']").on('click', function(){
    ga('send', {
      'hitType' : 'event',
      'eventCategory' : 'referral',
      'eventAction' : 'appointment',
      'eventLabel' : 'call now',
      'eventValue' : 1
    });
  });
}());

 