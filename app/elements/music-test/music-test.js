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

$('.music-test__list-item_one .music-test__play-example-img').click(test1);
$('.music-test__list-item_two .music-test__play-example-img').click(test2);
$('.music-test__list-item_three .music-test__play-example-img').click(test3);


var test1 = $(".test1")[0];
var test2 = $(".test2")[0];
var test3 = $(".test3")[0];

// 1_Три ноты для 1 субтеста ЗС
function test1() {

  test2.pause();
  test3.pause();

  if (test1.paused) {
    test1.currentTime = 0;
    test1.play();
  } else {
    test1.pause();
  }
}
// 2_Три ноты для 2 субтеста ЗС
function test2() {

  test1.pause();
  test3.pause();

  if (test2.paused) {
    test2.currentTime = 0;
    test2.play();
  } else {
    test2.pause();
  }
}
// 3_Три ноты для 3 субтеста ЗС
function test3() {

  test1.pause();
  test2.pause();

  if (test3.paused) {
    test3.currentTime = 0;
    test3.play();
  } else {
    test3.pause();
  }
}

$('.music-test__list-item_one .music-test__label_one').one('click', test1Nota1);
$('.music-test__list-item_one .music-test__label_two').one('click', test1Nota2);
$('.music-test__list-item_one .music-test__label_three').one('click', test1Nota3);

var test1Nota1 = $(".test1Nota1")[0];
var test1Nota2 = $(".test1Nota2")[0];
var test1Nota3 = $(".test1Nota3")[0];

// 1_Одна нота для 1 субтеста ЗС
function test1Nota1() {

  test1Nota2.pause();
  test1Nota3.pause();

  if (test1Nota1.paused) {
    test1Nota1.currentTime = 0;
    test1Nota1.play();
  } else {
    test1Nota1.pause();
  }
}

// 2_одна нота для 1 субтеста ЗС
function test1Nota2() {

  test1Nota1.pause();
  test1Nota3.pause();

  if (test1Nota2.paused) {
    test1Nota2.currentTime = 0;
    test1Nota2.play();
  } else {
    test1Nota2.pause();
  }
}

// 3_Одна нота для 1-го субтеста ЗС
function test1Nota3() {

  test1Nota1.pause();
  test1Nota2.pause();

  if (test1Nota3.paused) {
    test1Nota3.currentTime = 0;
    test1Nota3.play();
  } else {
    test1Nota3.pause();
  }
}

$('.music-test__list-item_two .music-test__label_one').one('click', test2Nota1);
$('.music-test__list-item_two .music-test__label_two').one('click', test2Nota2);
$('.music-test__list-item_two .music-test__label_three').one('click', test2Nota3);

var test2Nota1 = $(".test2Nota1")[0];
var test2Nota2 = $(".test2Nota2")[0];
var test2Nota3 = $(".test2Nota3")[0];

// 1_Одна нота для 2 субтеста ЗС
function test2Nota1() {

  test2Nota2.pause();
  test2Nota3.pause();

  if (test2Nota1.paused) {
    test2Nota1.currentTime = 0;
    test2Nota1.play();
  } else {
    test2Nota1.pause();
  }
}

// 2_одна нота для 2 субтеста ЗС
function test2Nota2() {

  test2Nota1.pause();
  test2Nota3.pause();

  if (test2Nota2.paused) {
    test2Nota2.currentTime = 0;
    test2Nota2.play();
  } else {
    test2Nota2.pause();
  }
}

// 3_Одна нота для 2-го субтеста ЗС
function test2Nota3() {

  test2Nota1.pause();
  test2Nota2.pause();

  if (test2Nota3.paused) {
    test2Nota3.currentTime = 0;
    test2Nota3.play();
  } else {
    test2Nota3.pause();
  }
}

$('.music-test__list-item_three .music-test__label_one').one('click', test3Nota1);
$('.music-test__list-item_three .music-test__label_two').one('click', test3Nota2);
$('.music-test__list-item_three .music-test__label_three').one('click', test3Nota3);

var test3Nota1 = $(".test3Nota1")[0];
var test3Nota2 = $(".test3Nota2")[0];
var test3Nota3 = $(".test3Nota3")[0];

// 1_Одна нота для 3 субтеста ЗС
function test3Nota1() {

  test3Nota2.pause();
  test3Nota3.pause();

  if (test3Nota1.paused) {
    test3Nota1.currentTime = 0;
    test3Nota1.play();
  } else {
    test3Nota1.pause();
  }
}

// 2_одна нота для 3 субтеста ЗС
function test3Nota2() {

  test3Nota1.pause();
  test3Nota3.pause();

  if (test3Nota2.paused) {
    test3Nota2.currentTime = 0;
    test3Nota2.play();
  } else {
    test3Nota2.pause();
  }
}

// 3_Одна нота для 3-го субтеста ЗС
function test3Nota3() {

  test3Nota1.pause();
  test3Nota2.pause();

  if (test3Nota3.paused) {
    test3Nota3.currentTime = 0;
    test3Nota3.play();
  } else {
    test3Nota3.pause();
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

  /*   console.log(ArrZC);
    console.log(ZC); */

  if ($('.music-test input:checkbox:checked').length == 3) {
    mySwiper.slideNext();
  }
})