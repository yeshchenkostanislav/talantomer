$('.ear-music__checkbox').click(function () {
  $('.ear-music__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});


$('.ear-music__label_one').click(soundClick);
$('.ear-music__play-example-img').click(soundClick);

function soundClick() {
  let audio = new Audio(); // Создаём новый элемент Audio
  audio.src = ''; // Указываем путь к звуку "клика"
  audio.play(); // Автоматически запускаем
}

$('.ear-music__label_two').click(soundClick_two);

function soundClick_two() {
  let audio2 = new Audio(); // Создаём новый элемент Audio
  audio2.src = ''; // Указываем путь к звуку "клика"
  audio2.play(); // Автоматически запускаем
}

$('.ear-music__label_three').click(soundClick_three);

function soundClick_three() {
  let audio3 = new Audio(); // Создаём новый элемент Audio
  audio3.src = ''; // Указываем путь к звуку "клика"
  audio3.play(); // Автоматически запускаем
}