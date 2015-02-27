(function() {
'use strict';
  jQuery( document ).ready( function( $ ){
    // Init foundation
    $(document).foundation();

    (function viewMore(){
        var $viewMoreParagraph = $('.s-view-more-paragraph'); 
        $viewMoreParagraph.css('display', 'none');

        var $viewMoreLink = $('.s-view-more-link');
        $viewMoreLink.css('display', 'inline-block');

        $viewMoreLink.click(function(e){
          if(e.preventDefault) {
            e.preventDefault();
          } else {
                      e.returnValue = false;
          }
    
          var $this = $(this);
    
          $this.prev($viewMoreParagraph).slideDown(function(){
            var $callNowNumber = $('<p>(303) 791-4411</p>');
            $this
              .after($callNowNumber)
              .replaceWith('<a href="tel:3037914411" class="button" data-event="referral">Call Now</a>');
          });
          
        });
      }());

    // IFFE show family photos toggle
    (function aboutToggle() {
      var $familyButton = $('#family'),
          $resumeButton = $('#resume'),
          $resumeContainer = $('.l-about-resume'),
          $familyContainer = $('.l-about-family');

      $resumeContainer.css('display', 'none');
      $familyContainer.css('display', 'none');
      $familyButton.css('display', 'inline-block');
      $resumeButton.css('display', 'inline-block');

        $familyButton.click(function(e){
        e.preventDefault();
        if($resumeContainer.is(':visible')) {
          $resumeContainer.slideUp();
        }
        $familyContainer.slideToggle();
      });

      $resumeButton.click(function(e){
        e.preventDefault();
        if($familyContainer.is(':visible')) {
          $familyContainer.slideUp();
        }
        $resumeContainer.slideToggle();
      });
    }());

    //IFFE scrollTo #hash animations
    (function smoothScroll(){
      $('a[href^="#"]').on('click',function (e) {
        //check for event object
        if (!e) {
          e = window.event;
        }

        //prevent default for both ie old and new
        if(e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }

        //grab the anchor target and wrap in jQuery object
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
      });
    }());
  });
}());
