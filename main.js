$(document).ready(function () {
  function handleWhenScrolling(_this) {
    const headerObj = $(".header");

    headerObj.css("background-color", "transparent");
    headerObj.removeClass("shadow-sm");

    if (_this.scrollTop() > headerObj.height()) {
      headerObj.css("background-color", "#212741");
      headerObj.addClass("shadow-sm");
    }
  }

  $(window).scroll(function () {
    handleWhenScrolling($(this));
  });
});
