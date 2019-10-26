//возможность выбрать только один чекбокс
$('.music-test__list-item_one .music-test__checkbox').click(function () {
  $('.music-test__list-item_one .music-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.music-test__list-item_two .music-test__checkbox').click(function () {
  $('.music-test__list-item_two .music-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.music-test__list-item_three .music-test__checkbox').click(function () {
  $('.music-test__list-item_three .music-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

// первый тест
$('.music-test__list-item_one .music-test__label_one').click(soundClick_1);

function soundClick_1() {
  let audio_1 = new Audio(); // Создаём новый элемент Audio
  audio_1.src = ''; // Указываем путь к звуку "клика"
  audio_1.play(); // Автоматически запускаем
}

// правильный ответ
$('.music-test__list-item_one .music-test__play-example-img').click(soundClick_2);
$('.music-test__list-item_one .music-test__label_two').click(soundClick_2);

function soundClick_2() {
  let audio_2 = new Audio(); // Создаём новый элемент Audio
  audio_2.src = ''; // Указываем путь к звуку "клика"
  audio_2.play(); // Автоматически запускаем
}

$('.music-test__list-item_one .music-test__label_three').click(soundClick_3);

function soundClick_3() {
  let audio_3 = new Audio(); // Создаём новый элемент Audio
  audio_3.src = ''; // Указываем путь к звуку "клика"
  audio_3.play(); // Автоматически запускаем
}


// второй тест
// правильный ответ
$('.music-test__list-item_two .music-test__play-example-img').click(soundClick_4);
$('.music-test__list-item_two .music-test__label_one').click(soundClick_4);

function soundClick_4() {
  let audio_4 = new Audio(); // Создаём новый элемент Audio
  audio_4.src = ''; // Указываем путь к звуку "клика"
  audio_4.play(); // Автоматически запускаем
}

$('.music-test__list-item_two .music-test__label_two').click(soundClick_5);

function soundClick_5() {
  let audio_5 = new Audio(); // Создаём новый элемент Audio
  audio_5.src = ''; // Указываем путь к звуку "клика"
  audio_5.play(); // Автоматически запускаем
}

$('.music-test__list-item_two .music-test__label_three').click(soundClick_6);

function soundClick_6() {
  let audio_6 = new Audio(); // Создаём новый элемент Audio
  audio_6.src = ''; // Указываем путь к звуку "клика"
  audio_6.play(); // Автоматически запускаем
}


// третий тест
$('.music-test__list-item_three .music-test__label_one').click(soundClick_7);

function soundClick_7() {
  let audio_7 = new Audio(); // Создаём новый элемент Audio
  audio_7.src = ''; // Указываем путь к звуку "клика"
  audio_7.play(); // Автоматически запускаем
}

// правильный ответ
$('.music-test__list-item_three .music-test__play-example-img').click(soundClick_8);
$('.music-test__list-item_three .music-test__label_two').click(soundClick_8);

function soundClick_8() {
  let audio_8 = new Audio(); // Создаём новый элемент Audio
  audio_8.src = ''; // Указываем путь к звуку "клика"
  audio_8.play(); // Автоматически запускаем
}

$('.music-test__list-item_three .music-test__label_three').click(soundClick_9);

function soundClick_9() {
  let audio_9 = new Audio(); // Создаём новый элемент Audio
  audio_9.src = ''; // Указываем путь к звуку "клика"
  audio_9.play(); // Автоматически запускаем
}

let ArrZC = [];

// собираем баллы за тест
$(".music-test__btn").click(function () {
  $('.music-test input:checkbox:checked').each(function (i, element) {
    ArrZC.push($(element).attr('data-ZC'));
  });
  console.log(ArrZC);
})