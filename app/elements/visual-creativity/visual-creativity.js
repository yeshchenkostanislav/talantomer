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
});



$(".visual-creativity__btn").click(function () {

  //при клике на кнопку, собираются все значения
  $('.visual-creativity input:checkbox:checked').each(function (i, element) {
    ArrBK.push($(element).attr('data-BK'));
  });

  $.each(ArrBK, function (ind, val) {
    BKsum += +val;
  });

  /*   console.log(ArrBK);
    console.log(BKsum); */

  if ($('.visual-creativity input:checkbox:checked').length == 3) {
    mySwiper.slideNext();
  }

})

let ArrBK = [];
let BKsum = 0;