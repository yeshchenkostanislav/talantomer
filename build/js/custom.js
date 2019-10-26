'use strict';

$('document').ready(function () {
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

  var ArrTE = [];
  var TZsum = 0;
  var TZ = TZsum * 10 / 5; // это переменная ТЗ

  var ArrAC2 = [];
  var ACsum2 = 0;
  var AC = (ACsum1 + ACsum2 * 2) * 10 / 5; // это переменная AC

  var BK4 = void 0;
  var BK = (BKsum + BK4) * 10 / 4; // это переменная BK

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
  });
  $('.ear-music__checkbox').click(function () {
    $('.ear-music__checkbox').each(function (i, element) {
      $(element).prop('checked', false);
    });
    $(this).prop('checked', true);
  });

  $('.ear-music__label_one').click(soundClick);
  $('.ear-music__play-example-img').click(soundClick);

  function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = ''; // Указываем путь к звуку "клика"
    audio.play(); // Автоматически запускаем
  }

  $('.ear-music__label_two').click(soundClick_two);

  function soundClick_two() {
    var audio2 = new Audio(); // Создаём новый элемент Audio
    audio2.src = ''; // Указываем путь к звуку "клика"
    audio2.play(); // Автоматически запускаем
  }

  $('.ear-music__label_three').click(soundClick_three);

  function soundClick_three() {
    var audio3 = new Audio(); // Создаём новый элемент Audio
    audio3.src = ''; // Указываем путь к звуку "клика"
    audio3.play(); // Автоматически запускаем
  }
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

  var ArrAC = [];
  var ACsum1 = 0;
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-button-prev'
    }
  });

  mySwiper.on('slideChange', function () {
    $(window).scrollTop(0);
  });

  var BK1 = void 0,
      BK2 = void 0,
      BK3 = void 0;
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
    var audio_1 = new Audio(); // Создаём новый элемент Audio
    audio_1.src = ''; // Указываем путь к звуку "клика"
    audio_1.play(); // Автоматически запускаем
  }

  // правильный ответ
  $('.music-test__list-item_one .music-test__play-example-img').click(soundClick_2);
  $('.music-test__list-item_one .music-test__label_two').click(soundClick_2);

  function soundClick_2() {
    var audio_2 = new Audio(); // Создаём новый элемент Audio
    audio_2.src = ''; // Указываем путь к звуку "клика"
    audio_2.play(); // Автоматически запускаем
  }

  $('.music-test__list-item_one .music-test__label_three').click(soundClick_3);

  function soundClick_3() {
    var audio_3 = new Audio(); // Создаём новый элемент Audio
    audio_3.src = ''; // Указываем путь к звуку "клика"
    audio_3.play(); // Автоматически запускаем
  }

  // второй тест
  // правильный ответ
  $('.music-test__list-item_two .music-test__play-example-img').click(soundClick_4);
  $('.music-test__list-item_two .music-test__label_one').click(soundClick_4);

  function soundClick_4() {
    var audio_4 = new Audio(); // Создаём новый элемент Audio
    audio_4.src = ''; // Указываем путь к звуку "клика"
    audio_4.play(); // Автоматически запускаем
  }

  $('.music-test__list-item_two .music-test__label_two').click(soundClick_5);

  function soundClick_5() {
    var audio_5 = new Audio(); // Создаём новый элемент Audio
    audio_5.src = ''; // Указываем путь к звуку "клика"
    audio_5.play(); // Автоматически запускаем
  }

  $('.music-test__list-item_two .music-test__label_three').click(soundClick_6);

  function soundClick_6() {
    var audio_6 = new Audio(); // Создаём новый элемент Audio
    audio_6.src = ''; // Указываем путь к звуку "клика"
    audio_6.play(); // Автоматически запускаем
  }

  // третий тест
  $('.music-test__list-item_three .music-test__label_one').click(soundClick_7);

  function soundClick_7() {
    var audio_7 = new Audio(); // Создаём новый элемент Audio
    audio_7.src = ''; // Указываем путь к звуку "клика"
    audio_7.play(); // Автоматически запускаем
  }

  // правильный ответ
  $('.music-test__list-item_three .music-test__play-example-img').click(soundClick_8);
  $('.music-test__list-item_three .music-test__label_two').click(soundClick_8);

  function soundClick_8() {
    var audio_8 = new Audio(); // Создаём новый элемент Audio
    audio_8.src = ''; // Указываем путь к звуку "клика"
    audio_8.play(); // Автоматически запускаем
  }

  $('.music-test__list-item_three .music-test__label_three').click(soundClick_9);

  function soundClick_9() {
    var audio_9 = new Audio(); // Создаём новый элемент Audio
    audio_9.src = ''; // Указываем путь к звуку "клика"
    audio_9.play(); // Автоматически запускаем
  }

  var ArrZC = [];

  // собираем баллы за тест
  $(".music-test__btn").click(function () {
    $('.music-test input:checkbox:checked').each(function (i, element) {
      ArrZC.push($(element).attr('data-ZC'));
    });
    console.log(ArrZC);
  });
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

  var ArrBK = [];
  var BKsum = 0;

  $.each(ArrBK, function (ind, val) {
    BKsum += +val;
  });
});