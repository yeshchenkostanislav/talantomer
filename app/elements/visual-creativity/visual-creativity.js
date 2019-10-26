//возможно выбрать только один чекбокс
$('.visual-creativity__options-list_one .visual-creativity__checkbox').click(function () {
  $('.visual-creativity__options-list_one .visual-creativity__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.visual-creativity__options-list_two .visual-creativity__checkbox').click(function () {
  $('.visual-creativity__options-list_two .visual-creativity__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);
});

$('.visual-creativity__options-list_three .visual-creativity__checkbox').click(function () {
  $('.visual-creativity__options-list_three .visual-creativity__checkbox').each(function (i, element) {
    $(element).prop('checked', false);
  });
  $(this).prop('checked', true);

  //при клике на чекбокс в последней строке, собираются все значения
  $('.visual-creativity input:checkbox:checked').each(function (i, element) {
    ArrBK.push($(element).attr('data-BK'));
  });


});


let ArrBK = [];
let BKsum = 0;

$.each(ArrBK, function (ind, val) {
  BKsum += +val;
});