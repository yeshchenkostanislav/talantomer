//возможно выбрать только один чекбокс
$('.creativity-test__question-list-item_one .creativity-test__checkbox').click(function () {
  $('.creativity-test__question-list-item_one .creativity-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.creativity-test__question-list-item_two .creativity-test__checkbox').click(function () {
  $('.creativity-test__question-list-item_two .creativity-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.creativity-test__question-list-item_three .creativity-test__checkbox').click(function () {
  $('.creativity-test__question-list-item_three .creativity-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.creativity-test__question-list-item_four .creativity-test__checkbox').click(function () {
  $('.creativity-test__question-list-item_four .creativity-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.creativity-test__question-list-item_five .creativity-test__checkbox').click(function () {
  $('.creativity-test__question-list-item_five .creativity-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.creativity-test__play').click(testPlay);

var testPlay = $(".testPlay")[0];

function testPlay() {

  if (testPlay.paused) {
    testPlay.currentTime = 0;
    testPlay.play();
  } else {
    testPlay.pause();
  }

}


let ArrTE = [];
let TEsum = 0;
let TZ; // это переменная ТЗ
//let TE = TZ; 

let ArrAC2 = [];
let ACsum2 = 0;
let AC; // это переменная AC

let BK4;
let BK; // это переменная BK

//при клике на кнопку, собираются все значения
$(".creativity-test__btn").click(function () {

  // перебираем все чекбоксы и получаем аттрибут data-TE
  $('.creativity-test input:checkbox:checked').each(function (i, element) {
    ArrTE.push($(element).attr('data-TE'));
  });
  // складываются элементы массива и формирут переменную ТЗ в коде это TZ
  $.each(ArrTE, function (ind, val) {
    TEsum += +val;
  });

  TZ = TEsum * 10 / 5;

  /*   console.log("Массив ArrTE " + ArrTE);
    console.log("Сумма массива ArrTE " + TEsum);
    console.log("Подсчет переменной TZ " + TZ); */

  // перебираем все чекбоксы и получаем аттрибут data-AC
  $('.creativity-test input:checkbox:checked').each(function (i, element) {

    if ($(element).attr('data-AC')) {
      ArrAC2.push($(element).attr('data-AC'));
    }

  });
  // складываются элементы массива и формирут переменную AC в коде это AC
  $.each(ArrAC2, function (ind, val) {
    ACsum2 += +val;
  });

  AC = (ACsum1 + ACsum2 * 2) * 10 / 7;

  /*   console.log("Массив ArrAC2 " + ArrAC2);
    console.log("Сумма массива ACsum2 " + ACsum2);
    console.log("Подсчет переменной AC " + AC); */



  // перебираем все чекбоксы и получаем аттрибут data-BK
  $('.creativity-test input:checkbox:checked').each(function (i, element) {

    if ($(element).attr('data-BK')) {
      BK4 = $(element).attr('data-BK');
    }

  });

  BK = (BKsum + BK4) * 10 / 4;

  /*   console.log("Переменная BK4 " + BK4);
    console.log("Подсчет переменной BK " + BK); */

  if ($('.creativity-test input:checkbox:checked').length == 5) {
    mySwiper.slideNext();
  }

})