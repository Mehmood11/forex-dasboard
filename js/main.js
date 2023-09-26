var dropdown = document.getElementsByClassName("dropdown-btn");
var sidebar = document.getElementById("sidebar");
var i;
// ----------- This block of code is for dropdown content in sidebar ---------------- //
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      if (sidebar.hasAttribute("active")) {
        dropdownContent.style.marginLeft = "0px";
        dropdownContent.style.float = "right";
      }
    } else {
      dropdownContent.style.display = "block";
      if (sidebar.hasAttribute() === "active") {
        dropdownContent.style.marginLeft = "20px";
        dropdownContent.style.float = "left";
      }
    }
  });
}

(function ($) {
  "use strict";
  $(".nav-lable").show();
  $(".showShortForm").hide();
  $(".toggle-icon").addClass("fa-arrow-left");

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // ---------------- This block of code is for sidebar, when it open or closed and adding and removing classes for specific elements as mentioned below like 'nav-lable' ----------------- //.
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    if ($("#sidebar.active").length) {
      $(".dropdown-container").addClass("addStyle");
      $(".nav-lable").hide();
      $(".showShortForm").show();
      $(".toggle-icon").addClass("fa-arrow-right");
      $(".toggle-icon").removeClass("fa-arrow-left");
    } else {
      $(".dropdown-container").removeClass("addStyle");
      $(".nav-lable").show();
      $(".showShortForm").hide();
      $(".toggle-icon").addClass("fa-arrow-left");
      $(".toggle-icon").removeClass("fa-arrow-right");
    }
  });
})(jQuery);
