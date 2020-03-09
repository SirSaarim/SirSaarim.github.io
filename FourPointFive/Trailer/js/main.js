


$(document).ready( function() {

  $('#preloader').delay(3000).fadeOut('slow');
    
        // SMOOTH SCROLL
        
        if ($('#smooth-scroll').length){
            var elem = document.querySelector("#smooth-scroll");
                var scrollbar = Scrollbar.init(elem,
                {
                  renderByPixels: true,
                  damping:0.05
                }); 
                  $(".back-top").on('click', function() {
                    TweenLite.to(scrollbar, 1.5, {scrollTop:0, ease:Power4.easeInOut});
              }); 
        }




        // PAGE ANIMATION
        var controller = new ScrollMagic.Controller();
        $('.box-animation').each(function(){
          var $this = $(this);
          var $thisHeight = $(this).height();
            
          var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
          .addTo(controller);
            
          
          scene.triggerHook(1)
          
          scene.on('enter', function(){
            $this.delay($this.attr('data-delay')).queue(function(next){
              TweenMax.to($this, 0.6, {force3D:true, opacity:1, y:0, scale:1, delay:0.1, ease:Power2.easeOut});
              next();
            });
          });
          
          scene.on('leave', function(event){
            $this.removeClass('active');
          });
          
          if ($("body").hasClass("smooth-scroll")) {
            scrollbar.addListener(() => {
              scene.refresh()
            });
          }
        })


        new ScrollMagic.Scene({triggerElement: '.works', triggerHook: '.9'})
              .setClassToggle('body', 'reverse')
              .addTo(controller);
              new ScrollMagic.Scene({triggerElement: '.footer', triggerHook: '.8'})
              .setClassToggle('body', 'darkagain')
              .addTo(controller);

        
}); // document read end 














