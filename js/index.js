/// <reference types="../@types/jquery" />;

//
let singers = $(".singer");
let singersInfo = $(".singerInfo");
singers.on("click", function (e) {
  $(e.target).next().slideToggle(500);
  singersInfo.not($(e.target).next()).slideUp(500);
});

// Timer Section
let Timer = $(".col-md-3 .box");
$(function () {
  let countDownDate = new Date("2024-12-25");
  setInterval(function () {
    let now = new Date();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    Timer.eq(0).html(`${days} D`);
    Timer.eq(1).html(`${hours} h`);
    Timer.eq(2).html(`${minutes} m`);
    Timer.eq(3).html(`${seconds} s`);
  }, 1000);
});

// function to use down
let display = () => {
  $(".lastP")
    .html(`<span id="Num" class="me-2">${counter}</span>Characyer Reamining`)
    .css({ cssText: "color = black !important" });
  if (counter < 0) {
    $(".lastP")
      .text("your available character finished")
      .css({ color: "#d62e33" });
  }
};

// maxmum 100 char in textarea
let counter = 100;
$(".lastP").html(
  `<span id="Num" class="me-2">${counter}</span>Characyer Reamining`
);
$("textarea").on("input", function (e) {
  if ($("textarea").val() == "") {
    $(".lastP").html(
      `<span id="Num" class="me-2">100</span>Characyer Reamining`
    );
    counter = 100;
  } else if (
    e.originalEvent.inputType == "deleteContentBackward" ||
    e.originalEvent.inputType == "deleteContentForward"
  ) {
    ++counter;
    display();
  } else {
    --counter;
    display();
  }
});

// nav bar
$("#open").on("click", function () {
  $(".boxNav").animate({ width: "200px" }, 500);
  $("#open").animate({ width: "0" }, 500);
  $(".layer .info").animate({ marginLeft: "200px" }, 500);
  $(".layer .info h2").animate({ fontSize: "40px", lineHeight: "55px" }, 500);
});
$("#ex").on("click", function () {
  $(".boxNav").animate({ width: "0" }, 500);
  $("#open").animate({ width: "105px" }, 500);
  $(".layer .info").animate({ marginLeft: "0" }, 500);
  $(".layer .info h2").animate({ fontSize: "60px", lineHeight: "72px" }, 500);
});

let navLinks = $(".boxNav a").not("#ex");
navLinks.on("click", function (e) {
  let x = $(e.target).attr("href");
  let navLinksOffset = $(x).offset().top;
  $("html").animate({ scrollTop: navLinksOffset }, 2000);
});

