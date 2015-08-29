$(document).ready(function (){

       var sidebar = $('#sidebar-header');
       var menuToggle = $('#menu-toggle');
       var close = $('#close');

      //show sidebar

      menuToggle.click(function(e){
              e.preventDefault();
              sidebar.slideDown('fast');

      });


       //Hide Sidebar
      close.click(function(e){
              e.preventDefault();
              sidebar.slideUp('fast');

      })



      //fade in and out scroll top button depending on window height
      var top = 0;
      $(window).scroll(function(){

              var currentPosition = $(this).scrollTop();
              if(currentPosition > top) {

                $('#jump-top').slideDown('slow').css('display','block');
            }
              else{
                $('#jump-top').slideUp('slow');
              }
      });


      //smooth scrolling to the top
      $("#jump-top").click(function (e){
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $('body').offset().top
                    }, 1500);

        });

        //scroll to skills section
       $(".header [type='button']").click(function (e){
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $("#skills").offset().top
                    }, 1500);

        });

        //scroll to footer
        $("#scroll-footer").click(function (e){
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $("#contact").offset().top
                    }, 1500);

        });

        //navigation jump
        $("#nav-about").click(function (e){
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $("#skills").offset().top
                    }, 1500);

                    sidebar.slideUp('fast');

        });

        $("#nav-contact").click(function (e){
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $("#contact").offset().top
                    }, 1500);

                    sidebar.slideUp('fast');
        });

        $("#nav-profile").click(function (e){
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $("#profile").offset().top
                    }, 1500);

                    sidebar.slideUp('fast');
         });

        $('.linkedIN').click(function(){

                    window.open('https://www.linkedin.com/profile/view?id=AAMAAAuLSWkB8I9maeP-yB6ZIO4MUDEZF0eWSU0&trk=hp-identity-name');
                    sidebar.slideUP('fast');
        });

        $('.github').click(function(){

                    window.open('https://github.com/sevanb?tab=repositories');
                    sidebar.slideUP('fast');

        });



        $('.resume-dl').click(function(){

                    window.open('https://drive.google.com/file/d/0B-iCrxmf7DWTTEI5RVhkZWVBSVk/view?usp=sharing');


        });



});







