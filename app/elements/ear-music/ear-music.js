$('.ear-music__checkbox').click(function () {
  $('.ear-music__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

// пример
$('.ear-music__text-play').click(proba);
$('.ear-music__play-example-img').click(proba);

var proba = $(".proba")[0];

function proba() {

  proba.pause();
  proba1.pause();
  proba2.pause();
  proba3.pause();

  if (proba.paused) {
    proba.currentTime = 0;
    proba.play();
  } else {
    proba.pause();
  }
}


$('.ear-music__label_one').click(proba1);
$('.ear-music__label_two').click(proba2);
$('.ear-music__label_three').click(proba3);

var proba1 = $(".proba1")[0];

function proba1() {

  proba2.pause();
  proba3.pause();

  if (proba1.paused) {
    proba1.currentTime = 0;
    proba1.play();
  } else {
    proba1.pause();
  }
}

var proba2 = $(".proba2")[0];

function proba2() {

  proba1.pause();
  proba3.pause();

  if (proba2.paused) {
    proba2.currentTime = 0;
    proba2.play();
  } else {
    proba2.pause();
  }
}

var proba3 = $(".proba3")[0];

function proba3() {

  proba1.pause();
  proba2.pause();

  if (proba3.paused) {
    proba3.currentTime = 0;
    proba3.play();
  } else {
    proba3.pause();
  }
}


$('.ear-music__btn').click(function () {
  if ($('.ear-music input:checkbox:checked').length == 1) {
    mySwiper.slideNext();
  }
});