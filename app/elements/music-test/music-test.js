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

$('.music-test__list-item_one .music-test__play-example-img').click(audioTest1);
$('.music-test__list-item_two .music-test__play-example-img').click(audioTest2);
$('.music-test__list-item_three .music-test__play-example-img').click(audioTest3);

// 1_Три ноты для 1 субтеста ЗС
function audioTest1() {
  let audioTest1 = new Audio();
  audioTest1.src = 'http://d.zaix.ru/fkXT.mp3';
  audioTest1.play();
}
// 2_Три ноты для 2 субтеста ЗС
function audioTest2() {
  let audioTest2 = new Audio();
  audioTest2.src = 'http://d.zaix.ru/fkYu.mp3';
  audioTest2.play();
}
// 3_Три ноты для 3 субтеста ЗС
function audioTest3() {
  let audioTest3 = new Audio();
  audioTest3.src = 'http://d.zaix.ru/fkYy.mp3';
  audioTest3.play();
}

$('.music-test__list-item_one .music-test__label_one').click(note2);
$('.music-test__list-item_one .music-test__label_two').click(note);
$('.music-test__list-item_one .music-test__label_three').click(note3);

$('.music-test__list-item_two .music-test__label_one').click(note2);
$('.music-test__list-item_two .music-test__label_two').click(note);
$('.music-test__list-item_two .music-test__label_three').click(note3);

$('.music-test__list-item_three .music-test__label_one').click(note);
$('.music-test__list-item_three .music-test__label_two').click(note3);
$('.music-test__list-item_three .music-test__label_three').click(note2);

// 1_Одна нота для 1 субтеста ЗС
function note() {
  let note = new Audio();
  note.src = 'http://d.zaix.ru/fkY8.mp3';
  note.play();
}

// 2_одна нота для 2 субтеста ЗС
function note2() {
  let note2 = new Audio();
  note2.src = 'http://d.zaix.ru/fkYa.mp3';
  note2.play();
}

// 3_Одна нота для 3-го субтеста ЗС
function note3() {
  let note3 = new Audio();
  note3.src = 'http://d.zaix.ru/fkYb.mp3';
  note3.play();
}



let ArrZC = [];
let ZC = 0;

// собираем баллы за тест
$(".music-test__btn").click(function () {
  $('.music-test input:checkbox:checked').each(function (i, element) {
    ArrZC.push($(element).attr('data-ZC'));
  });

  $.each(ArrZC, function (ind, val) {
    ZC += +val;
  });

  console.log(ArrZC);
  console.log(ZC);
})