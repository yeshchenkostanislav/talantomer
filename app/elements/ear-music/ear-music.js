$('.ear-music__checkbox').click(function () {
  $('.ear-music__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

// пример
$('.ear-music__text-play').click(example);

var example = $(".example")[0];

function example() {
  if (example.paused) {
    example.currentTime = 0;
    example.play();
  } else {
    example.pause();
  }
}

$('.ear-music__play-example-img').click(audioTest2);
$('.ear-music__label_one').one('click', note);
$('.ear-music__label_two').one('click', note2);
$('.ear-music__label_three').one('click', note3);

$('.ear-music__btn').click(function () {
  if ($('.ear-music input:checkbox:checked').length == 1) {
    mySwiper.slideNext();
  }
});