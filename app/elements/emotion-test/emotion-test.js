//возможно выбрать только один чекбокс
$('.emotion-test__list-item_one .emotion-test__checkbox').click(function () {
  $('.emotion-test__list-item_one .emotion-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.emotion-test__list-item_two .emotion-test__checkbox').click(function () {
  $('.emotion-test__list-item_two .emotion-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.emotion-test__list-item_three .emotion-test__checkbox').click(function () {
  $('.emotion-test__list-item_three .emotion-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.emotion-test__list-item_four .emotion-test__checkbox').click(function () {
  $('.emotion-test__list-item_four .emotion-test__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);


  //при клике на чекбокс в последней строке, собираются все значения
  $('.emotion-test input:checkbox:checked').each(function (i, element) {
    ArrAC.push($(element).attr('data-AC'));
  });

  $.each(ArrAC, function (ind, val) {
    ACsum1 += +val;
  });
});


let ArrAC = [];
let ACsum1 = 0;