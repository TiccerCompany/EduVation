$(document).ready(function () {
    setTimeout(function () {
      $("#ctn-preloader").addClass("loaded");
      // Once the preloader has finished, the scroll appears
      $("#preloader-body").removeClass("no-scroll-y");
  
      if ($("#ctn-preloader").hasClass("loaded")) {
        // It is so that once the preloader is gone, the entire preloader section will removed
        $("#preloader")
          .delay(1000)
          .queue(function () {
            $(this).remove();
  
            // Force Main page to show from the Start(Top) even if user scroll down on preloader
  
            // Model 1 - Smooth
            document
              .getElementById("page-top")
              .scrollIntoView({ behavior: "smooth" });
            // Model 2 - Fast
            document.getElementById("page-top").scrollIntoView(); window.location.href = "splash/splash.html"; 
          });
      }
    }, 6000);
  });
  
  
  