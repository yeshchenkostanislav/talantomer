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


let ArrTE = [];
let TZsum = 0;
let TZ = TZsum * 10 / 5;
let TE = TZ; // это переменная ТЗ

let ArrAC2 = [];
let ACsum2 = 0;
let AC = (ACsum1 + ACsum2 * 2) * 10 / 5; // это переменная AC

let BK4;
let BK = (BKsum + BK4) * 10 / 4; // это переменная BK

//при клике на кнопку, собираются все значения
$(".creativity-test__btn").click(function () {

  // перебираем все чекбоксы и получаем аттрибут data-TE
  $('.creativity-test input:checkbox:checked').each(function (i, element) {
    ArrTE.push($(element).attr('data-TE'));
  });
  // складываются элементы массива и формирут переменную ТЗ в коде это TZ
  $.each(ArrTE, function (ind, val) {
    TZsum += +val;
  });


  // перебираем все чекбоксы и получаем аттрибут data-AC
  $('.creativity-test input:checkbox:checked').each(function (i, element) {
    ArrAC2.push($(element).attr('data-AC'));
  });
  // складываются элементы массива и формирут переменную AC в коде это AC
  $.each(ArrAC2, function (ind, val) {
    ACsum2 += +val;
  });


  // перебираем все чекбоксы и получаем аттрибут data-BK
  $('.creativity-test input:checkbox:checked').each(function (i, element) {
    BK4 = $(element).attr('data-BK');
  });

})