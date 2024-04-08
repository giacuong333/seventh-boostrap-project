$(document).ready(function () {
  function handleWhenScrolling(_this) {
    const headerObj = $(".header");

    headerObj.css("background-color", "transparent");
    headerObj.removeClass("shadow-sm");

    // Change background color when scrolling
    if (_this.scrollTop() > headerObj.height()) {
      headerObj.css("background-color", "#212741");
      headerObj.addClass("shadow-sm");
    }
  }

  function handleCurrentPosition() {
    const idOfHrefs = $(".navbar-list > li:not(.dropdown) > a");

    idOfHrefs.each(function () {
      const currentHref = $(this).attr("href");
      const elementOfIdHref = $(currentHref);

      // Update when scrolling
      if (elementOfIdHref.position().top <= $(window).scrollTop() && elementOfIdHref.outerHeight() + $(window).scrollTop() >= $(window).scrollTop()) {
        idOfHrefs.removeClass("active");
        $(this).addClass("active");
      }

      // Update when clicking
      $(this).click(function () {
        $(window).scrollTop(elementOfIdHref.position().top);
        idOfHrefs.removeClass("active");
        $(this).addClass("active");
      });
    });
  }
  handleCurrentPosition();

  // Scrolling
  $(window).scroll(function () {
    handleWhenScrolling($(this));
    handleCurrentPosition();
  });

  // Home slider
  var imgs = ["./imgs/slide-01.jpg", "./imgs/slide-02.jpg", "./imgs/slide-03.jpg"];
  var topElement = $(".top");
  var currentIndexImg = 0;

  function changeBgImg() {
    topElement.css("background-image", `url('${imgs[currentIndexImg]}')`);
  }
  changeBgImg();

  function slideBgImg(from, to, callback) {
    topElement.css("background-position", from);
    topElement.animate({ "background-position": to }, 1000, "linear", callback);
  }

  $(".carousel-control-prev").click(function () {
    currentIndexImg = (currentIndexImg - 1 + imgs.length) % imgs.length;
    changeBgImg();
  });

  $(".carousel-control-next").click(function () {
    currentIndexImg = (currentIndexImg + 1 + imgs.length) % imgs.length;
    changeBgImg();
  });
});
