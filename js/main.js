$(document).ready(function () {
    console.log('ready');
    // Init WOW
    new WOW().init();
    // Create offset for the scroll
    let $top_height = $('#header').height();
    console.log($top_height);

    $('.navbar-default ul.menu a.nav-link').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - ($top_height * 1.5)
            }, 400);
            return false;
          }
        }
      });
    
    // skill bar initiation
    var skills_sec = $('#skills');
    // Create fixed header on scroll.
    $(window).scroll(function () {
        var head_height = $('#header').height(); 
        console.log(head_height);
        if($(window).scrollTop() > 0) {
            $('nav').addClass('is-Sticky');
            
        } else {
            $('nav').removeClass('is-Sticky');
        }
    });

    
  
    
    $(window).on('scroll', function () {
        var scrl_Top = $(window).scrollTop();
        var s_ht = $(window).height();
        skillsTop = skills_sec.offset().top;
        mrg = $(this).css('margin', '10px');
        if(scrl_Top + s_ht > skillsTop) {
            $('.skillbar').each(function() {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-skill-percent'),
                    margin:$(mrg)
                    
                }, 3000);
            })
        }        
    });


});

