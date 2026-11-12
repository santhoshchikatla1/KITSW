



document.write(

    "<style>"+
    ".sidebar{"+
     "margin-bottom: 25px;"+
     "background: url(../imgnew/department-images/footer-bg1.jpg);"+
     "background-size: inherit;"+
     "background-position: bottom;"+
 "}"+
 ".sidebar{"+
  "height: 80%;"+
 "}"+
 ".scrollbar{"+
     "width: 20%;"+
 "}"+
 ".fullwidth {"+
     "padding-left: 22%;"+
 "}"+
 "</style>"+  


    "<nav class='sidebar scrollbar faculty card py-2 mb-4 ' id='style-3'>"+

    "<div class='menutogglediv'>"+
"<p class='menutoggle'><img  src='../imgnew/menu.png' style='width: 17px; cursor:pointer'></p>"+
 " <p class='menutoggle2'><img  src='../imgnew/menu.png' style='width: 17px; cursor:pointer'></p>"+
"</div>"+
"<div class='list_container' id='style-3'>"+
        "<ul class='nav flex-column item_direction side-menu-list force-overflow' id='nav_accordion'>"+
            //  "<li class='nav-item'>"+
            //     "<a class='nav-link' href='index.html'>Back To HomePage</a>"+
            // "</li>"+
            "<li class='nav-item'>"+
                "<a class='nav-link' href='#'>Home</a>"+
            "</li>"+
            // "<li class='nav-item'>"+
            //     "<a class='nav-link' href='#'> Student Profile  </a>"+
            // "</li>"+
            
            "<li class='nav-item has-submenu'>"+
                "<a class='nav-link' href='#'>Course Mapping<i class='fa fa-angle-down' ></i> </a>"+
                "<ul class='submenu collapse'>"+
                    "<li><a class='nav-link' href='Faculty_Dean_course_subject_mapping.html'>Course Subject Faculty Mapping</a></li>"+
                    
                "</ul>"+
            "</li>"+
            
            
            "</ul>"+
            "</div>"+
    "</nav>"

 

);