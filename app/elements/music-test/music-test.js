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


var audioTest1 = $(".audio")[0];
var audioTest2 = $(".audio")[1];
var audioTest3 = $(".audio")[2];

// 1_Три ноты для 1 субтеста ЗС
function audioTest1() {

  audioTest2.pause();
  audioTest3.pause();

  if (audioTest1.paused) {
    audioTest1.currentTime = 0;
    audioTest1.play();
  } else {
    audioTest1.pause();
  }
}
// 2_Три ноты для 2 субтеста ЗС
function audioTest2() {

  audioTest1.pause();
  audioTest3.pause();

  if (audioTest2.paused) {
    audioTest2.currentTime = 0;
    audioTest2.play();
  } else {
    audioTest2.pause();
  }
}
// 3_Три ноты для 3 субтеста ЗС
function audioTest3() {

  audioTest1.pause();
  audioTest2.pause();

  if (audioTest3.paused) {
    audioTest3.currentTime = 0;
    audioTest3.play();
  } else {
    audioTest3.pause();
  }
}

$('.music-test__list-item_one .music-test__label_one').one('click', note2);
$('.music-test__list-item_one .music-test__label_two').one('click', note);
$('.music-test__list-item_one .music-test__label_three').one('click', note3);

$('.music-test__list-item_two .music-test__label_one').one('click', note2);
$('.music-test__list-item_two .music-test__label_two').one('click', note);
$('.music-test__list-item_two .music-test__label_three').one('click', note3);

$('.music-test__list-item_three .music-test__label_one').one('click', note);
$('.music-test__list-item_three .music-test__label_two').one('click', note3);
$('.music-test__list-item_three .music-test__label_three').one('click', note2);

var note = $(".note")[0];
var note2 = $(".note")[1];
var note3 = $(".note")[2];

// 1_Одна нота для 1 субтеста ЗС
function note() {

  note2.pause();
  note3.pause();

  if (note.paused) {
    note.currentTime = 0;
    note.play();
  } else {
    note.pause();
  }
}

// 2_одна нота для 2 субтеста ЗС
function note2() {

  note.pause();
  note3.pause();

  if (note2.paused) {
    note2.currentTime = 0;
    note2.play();
  } else {
    note2.pause();
  }
}

// 3_Одна нота для 3-го субтеста ЗС
function note3() {

  note.pause();
  note2.pause();

  if (note3.paused) {
    note3.currentTime = 0;
    note3.play();
  } else {
    note3.pause();
  }
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

  if ($('.music-test input:checkbox:checked').length == 3) {
    mySwiper.slideNext();
  }
})