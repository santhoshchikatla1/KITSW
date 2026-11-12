//menu js start here
window.addEventListener("resize", function () {
  "use strict";
  window.location.reload();
});
document.addEventListener("DOMContentLoaded", function () {
  /////// Prevent closing from click inside dropdown
  document.querySelectorAll(".dropdown-menu").forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
    // close all inner dropdowns when parent is closed
    document
      .querySelectorAll(".navbar .dropdown")
      .forEach(function (everydropdown) {
        everydropdown.addEventListener("hidden.bs.dropdown", function () {
          // after dropdown is hidden, then find all submenus
          this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
            // hide every submenu as well
            everysubmenu.style.display = "none";
          });
        });
      });
    document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
      element.addEventListener("click", function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains("submenu")) {
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          console.log(nextEl);
          if (nextEl.style.display == "block") {
            nextEl.style.display = "none";
          } else {
            nextEl.style.display = "block";
          }
        }
      });
    });
  }
  // end if innerWidth
});
//menu js end here

//a a+ a- code start here
var $affectedElements = $("*");
$affectedElements.each(function () {
   var $this = $(this);
   $this.data("orig-size", $this.css("font-size"));
});

$("#btn-increase").click(function () {
   changeFontSize(1);

})

$("#btn-decrease").click(function () {
   changeFontSize(-1);
})

$("#btn-orig").click(function () {
   $affectedElements.each(function () {
       var $this = $(this);
       $this.css("font-size", $this.data("orig-size"));
   });
})

function changeFontSize(direction) {
   $affectedElements.each(function () {
       var $this = $(this);
       $this.css("font-size", parseInt($this.css("font-size")) + direction);
   });
}



$(".color").click(function () {
   $("body").css({ "-moz-filter": "grayscale(100%)", "-webkit-filter": "grayscale(100%)", "filter": "gray", "filter": "grayscale(100%)" });

   $("body").css("background", "#000");

});


$(".nocolor").click(function () {
   $("body").css({ "-moz-filter": "grayscale(0%)", "-webkit-filter": "grayscale(0%)", "filter": "white", "filter": "grayscale(0%)" });

   $("body").css("background", "url(../images/bg-ts.jpg)");

});
//a a+ a- code end here


//Marquee js

jQuery(document).ready(function ($) {
$('.my-news-ticker').AcmeTicker({
  type: 'horizontal',/*horizontal/horizontal/Marquee/type*/
  direction: 'right',/*up/down/left/right*/
 
  controls: {
    prev: $('.acme-news-ticker-prev'),/*Can be used for horizontal/horizontal/typewriter*//*not work for marquee*/
    toggle: $('.acme-news-ticker-pause'),/*Can be used for horizontal/horizontal/typewriter*//*not work for marquee*/
    next: $('.acme-news-ticker-next')/*Can be used for horizontal/horizontal/marquee/typewriter*/
    
  }
});
})
//tabs js
$(document).ready(function () {
// var tooltipTriggerList = [].slice.call(
//   document.querySelectorAll('[data-bs-toggle="tooltip"]')
// );
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl);
// });


//$('.nav-tabs > li a[title]').tooltip();

$(".next").click(function () {
  const nextTabLinkEl = $(".nav-tabs .active")
    .closest("li")
    .next("li")
    .find("a")[0];
  const nextTab = new bootstrap.Tab(nextTabLinkEl);
  nextTab.show().addClass("animate__animated animate__fadeOutLeft");
});

$(".previous").click(function () {
  const prevTabLinkEl = $(".nav-tabs .active")
    .closest("li")
    .prev("li")
    .find("a")[0];
  const prevTab = new bootstrap.Tab(prevTabLinkEl);
  prevTab.show();
});
});

//search js

function searchToggle(obj, evt){
var container = $(obj).closest('.search-wrapper');
    if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
    }
}
//sidebar 
document.addEventListener("DOMContentLoaded", function(){

document.querySelectorAll('.sidebar-code .nav-link').forEach(function(element){

  element.addEventListener('click', function (e) {

    let nextEl = element.nextElementSibling;
    let parentEl  = element.parentElement;	

    if(nextEl) {
      e.preventDefault();	
      let mycollapse = new bootstrap.Collapse(nextEl);

        if(nextEl.classList.contains('show')){
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu = parentEl.parentElement.querySelector('.submenu-design.show');
          // if it exists, then close all of them
        if(opened_submenu){
          new bootstrap.Collapse(opened_submenu);
        }

        }
      }

  });
})

}); 
//search js
$(document).ready(function() {

  $(".fa-search").click(function() {
     $(".togglesearch").toggle();
     $("input[type='text']").focus();
   });
  
});


$(document).ready(function () {
    $(".menutoggle").click(function () {
        $(".sidebar").animate({ marginLeft: "-20%" }, 150);
        // $(".menutogglediv").animate({marginLeft: "-1%"}, 470 );
        $(".fullwidth").animate({ paddingLeft: "2%" }, 600);
        $(".menutoggle2").css('display', 'block');
        $(".menutoggle").css('display', 'none');
    });

    $(".menutoggle2").click(function () {
        $(".sidebar").animate({ marginLeft: "0%" }, 150);
        // $(".menutogglediv").animate({marginLeft: "22%"}, 640 );
        $(".fullwidth").animate({ paddingLeft: "22%" }, 600);
        $(".menutoggle2").css('display', 'none');
        $(".menutoggle").css('display', 'block');

    });
});