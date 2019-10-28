$('.ear-music__checkbox').click(function () {
  $('.ear-music__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

// пример
$('.ear-music__text-play').click(example);

function example() {
  let example = new Audio();
  example.src = 'http://d.zaix.ru/fkZe.mp3';
  example.play();
}

$('.ear-music__play-example-img').click(audioTest2);
$('.ear-music__label_one').click(note);
$('.ear-music__label_two').click(note2);
$('.ear-music__label_three').click(note3);