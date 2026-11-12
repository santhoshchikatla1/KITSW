$(document).ready(function(){
    $(".menutoggle").click(function(){
      $(".sidebar").animate({marginLeft: "-20%"}, 150 );
      // $(".menutogglediv").animate({marginLeft: "-1%"}, 470 );
      $(".fullwidth").animate({paddingLeft: "2%"}, 600);
      $(".menutoggle2").css('display' , 'block');
      $(".menutoggle").css('display' , 'none');
    });

    $(".menutoggle2").click(function(){
      $(".sidebar").animate({marginLeft: "0%"}, 150 );
      // $(".menutogglediv").animate({marginLeft: "22%"}, 640 );
      $(".fullwidth").animate({paddingLeft: "22%"}, 600);
      $(".menutoggle2").css('display' , 'none');
      $(".menutoggle").css('display' , 'block');
     
    });
  });