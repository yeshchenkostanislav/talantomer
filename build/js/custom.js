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
  var TZ = TZsum * 10 / 5;
  var TE = TZ; // это переменная ТЗ

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
  $('.interview-two__answer').bind("change keyup input click", function () {
    if (this.value.match(/[^1-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value > 10 || this.value == 0) this.value = this.value.slice(0, -1);
  });

  var ACm2 = void 0,
      TEm2 = void 0,
      BKm = void 0,
      TG2 = void 0;

  var ACm = void 0,
      TEm = void 0,
      TG = void 0;

  var TvEn = void 0,
      // ТвЭн = ТЭ + ТЭм 
  AktCp = void 0,
      //  АктСп = АС + АСм 
  VizKp = void 0,
      // ВизКр = (3*ВК + ВКм)/2
  MyzCp = void 0,
      // МузСп = (3*МС + МСм)/2
  TvGk = void 0; // ТвГк = ТГ*2

  var TvEnSten = void 0,
      AktCpSten = void 0,
      VizKpSten = void 0,
      MyzCpSten = void 0,
      TvGkSten = void 0;

  var TT = void 0; // финальный расчетный балл


  $(".interview-two__btn").click(function () {

    ACm2 = +$('#10').val() + +$('#11').val();
    TEm2 = +$('#7').val() + +$('#9').val();
    BKm = +$('#7').val();
    TG2 = +$('#7').val() + +$('#8').val() + +$('#12').val();

    console.log(ACm2, BKm, TEm2, TG2);
    console.log(ACm, MCm, TEm, BKm, TG);

    ACm = (ACm1 + ACm2) / 5;
    TEm = (TEm1 + TEm2) / 5;
    TG = (TG1 + TG2) / 5;

    TvEn = Math.ceil(TE + TEm); // ТвЭн = ТЭ + ТЭм 
    AktCp = Math.ceil(ACm + AC); //  АктСп = АС + АСм 
    VizKp = Math.ceil((3 * BK + BKm) / 2); // ВизКр = (3*ВК + ВКм)/2
    MyzCp = Math.ceil((3 * MC + MCm) / 2); // МузСп = (3*МС + МСм)/2
    TvGk = Math.ceil(TG * 2); // ТвГк = ТГ*2

    if (TvEn == 1) {
      TvEnSten = 1;
    } else if (TvEn == 2) {
      TvEnSten = 2;
    } else if (TvEn == 3 || TvEn == 4) {
      TvEnSten = 3;
    } else if (TvEn == 5 || TvEn == 6) {
      TvEnSten = 4;
    } else if (TvEn == 6 || TvEn == 7) {
      TvEnSten = 5;
    } else if (TvEn == 8 || TvEn == 9) {
      TvEnSten = 6;
    } else if (TvEn == 9 || TvEn == 10) {
      TvEnSten = 7;
    } else if (TvEn > 10 && TvEn < 15) {
      TvEnSten = 8;
    } else if (TvEn > 13 && TvEn < 19) {
      TvEnSten = 9;
    } else if (TvEn > 18 && TvEn < 21) {
      TvEnSten = 10;
    };

    if (AktCp == 1) {
      AktCpSten = 1;
    } else if (AktCp == 2) {
      AktCpSten = 2;
    } else if (AktCp == 3 || AktCp == 4) {
      AktCpSten = 3;
    } else if (AktCp == 5 || AktCp == 6) {
      AktCpSten = 4;
    } else if (AktCp == 6 || AktCp == 7) {
      AktCpSten = 5;
    } else if (AktCp == 8 || AktCp == 9) {
      AktCpSten = 6;
    } else if (AktCp == 9 || AktCp == 10) {
      AktCpSten = 7;
    } else if (AktCp == 11 || AktCp == 12) {
      AktCpSten = 8;
    } else if (AktCp > 12 && AktCp < 18) {
      AktCpSten = 9;
    } else if (AktCp > 17 && AktCp < 21) {
      AktCpSten = 10;
    };

    if (VizKp == 1) {
      VizKpSten = 1;
    } else if (VizKp == 2) {
      VizKpSten = 2;
    } else if (VizKp == 3) {
      VizKpSten = 3;
    } else if (VizKp > 3 && VizKp < 7) {
      VizKpSten = 4;
    } else if (VizKp > 5 && VizKp < 8) {
      VizKpSten = 5;
    } else if (VizKp > 7 && VizKp < 10) {
      VizKpSten = 6;
    } else if (VizKp > 8 && VizKp < 11) {
      VizKpSten = 7;
    } else if (VizKp > 10 && VizKp < 14) {
      VizKpSten = 8;
    } else if (VizKp > 13 && VizKp < 18) {
      VizKpSten = 9;
    } else if (VizKp > 17 && VizKp < 21) {
      VizKpSten = 10;
    };

    if (MyzCp == 1) {
      MyzCpSten = 1;
    } else if (MyzCp == 2) {
      MyzCpSten = 2;
    } else if (MyzCp == 3 || MyzCp == 4) {
      AktCpSten = 3;
    } else if (MyzCp == 5 || MyzCp == 6) {
      AktCpSten = 4;
    } else if (MyzCp == 6 || MyzCp == 7) {
      AktCpSten = 4;
    };

    if (TvGk == 1) {
      TvGkSten = 1;
    } else if (MyzCp == 2) {
      MyzCpSten = 2;
    } else if (MyzCp == 3 || MyzCp == 4) {
      AktCpSten = 3;
    } else if (MyzCp == 5 || MyzCp == 6) {
      AktCpSten = 4;
    } else if (MyzCp == 6 || MyzCp == 7) {
      AktCpSten = 4;
    };

    TT = Math.ceil((TvEnSten + TvEnSten + VizKpSten + MyzCpSten + TvGkSten) / 5);

    TT = 9;

    if ($(window).width() < 577) {

      if (TT == 2) {
        $('.conclusion__arrow_small').css({
          "transform": "rotate(18deg) translate(-72%, 26%)"
        });
      } else if (TT == 3) {
        $('.conclusion__arrow_small').css({
          "transform": "rotate(35deg) translate(-71%, 53%)"
        });
      } else if (TT == 4) {
        $('.conclusion__arrow_small').css({
          "transform": "rotate(54deg) translate(-72%, 88%)"
        });
      } else if (TT == 5) {
        $('.conclusion__arrow_small').css({
          "transform": "rotate(71deg) translate(-63%, 113%)"
        });
      } else if (TT == 6) {
        $('.conclusion__arrow_small').css({
          "transform": "rotate(86deg) translate(-51%, 126%)"
        });
      } else if (TT == 7) {
        $('.conclusion__arrow_small').css({
          "transform": "rotate(101deg) translate(-36%, 134%)"
        });
      } else if (TT == 8) {
        $('.conclusion__arrow_small').css({
          "transform": "rotate(120deg) translate(-21%, 137%)"
        });
      } else if (TT == 9) {
        $('.conclusion__arrow_small').css({
          "transform": "rotate(141deg) translate(-2%, 135%)"
        });
      } else if (TT == 10) {
        $('.conclusion__arrow_small').css({
          "transform": "rotate(159deg) translate(13%, 95%)"
        });
      }
    } else {

      if (TT == 2) {
        $('.conclusion__arrow').css({
          "transform": "rotate(21deg) translate(-72% , 18% )"
        });
      } else if (TT == 3) {
        $('.conclusion__arrow').css({
          "transform": "rotate(41 deg) translate(-73% ,28%)"
        });
      } else if (TT == 4) {
        $('.conclusion__arrow').css({
          "transform": "rotate(56deg) translate(-76%, 20%)"
        });
      } else if (TT == 5) {
        $('.conclusion__arrow').css({
          "transform": "rotate(71deg) translate(-77%, 19%)"
        });
      } else if (TT == 6) {
        $('.conclusion__arrow').css({
          "transform": "rotate(87deg) translate(-79%, 21%)"
        });
      } else if (TT == 7) {
        $('.conclusion__arrow').css({
          "transform": "rotate(106deg) translate(-74%, 35%)"
        });
      } else if (TT == 8) {
        $('.conclusion__arrow').css({
          "transform": "rotate(119deg) translate(-72%, 29%)"
        });
      } else if (TT == 9) {
        $('.conclusion__arrow').css({
          "transform": "rotate(136deg) translate(-70%, 27%)"
        });
      } else if (TT == 10) {
        $('.conclusion__arrow').css({
          "transform": "rotate(155deg) translate(-68%, 28%)"
        });
      }
    }

    if (TT == 3) {

      $('.conclusion__num').text('3-4');
      $('.conclusion__num').css({
        "color": "#c8f81b"
      });
      $('.conclusion__text').text('Общий   творческий   потенциал   Вашего   ребёнка находится в пределах возрастных   средних значений. Посмотрите, какие именно качества развиты у него в наибольшей степени. Наши педагоги и психологи могут провести более точную и детальную оценку различных аспектов творческого потенциала Вашего ребёнка и помочь развить его. Для этого мы рекомендуем выбрать удобную подписку на нашу платформу,смотреть видео и зарабатывать лайки. Персональную консультацию психолога по скайпу можно получить, заработав 100 лайков. Удачи');
    } else if (TT == 4) {

      $('.conclusion__num').text('3-4');
      $('.conclusion__num').css({
        "color": "#c8f81b"
      });
      $('.conclusion__text').text('Общий   творческий   потенциал   Вашего   ребёнка находится в пределах возрастных   средних значений. Посмотрите, какие именно качества развиты у него в наибольшей степени. Наши педагоги и психологи могут провести более точную и детальную оценку различных аспектов творческого потенциала Вашего ребёнка и помочь развить его. Для этого мы рекомендуем выбрать удобную подписку на нашу платформу,смотреть видео и зарабатывать лайки. Персональную консультацию психолога по скайпу можно получить, заработав 100 лайков. Удачи');
    } else if (TT == 5) {

      $('.conclusion__num').text('5-6');
      $('.conclusion__num').css({
        "color": "#ffd914"
      });
      $('.conclusion__text').text('Общий творческий потенциал Вашего ребёнка несколько выше средних возрастных значений. Посмотрите на графике, какие именно качества развиты у него в наибольшей степени. Наши педагоги и психологи могут провести более точную и детальную оценку различных аспектов творческого потенциала Вашего ребёнка и помочь развить его. Для этого мы рекомендуем выбрать удобную подписку на нашу платформу, смотреть видео и зарабатывать лайки. Персональную консультацию психолога по скайпу можно получить, заработав 100 лайков. Удачи!');
    } else if (TT == 6) {

      $('.conclusion__num').text('5-6');
      $('.conclusion__num').css({
        "color": "#ffd914"
      });
      $('.conclusion__text').text('Общий творческий потенциал Вашего ребёнка несколько выше средних возрастных значений. Посмотрите на графике, какие именно качества развиты у него в наибольшей степени. Наши педагоги и психологи могут провести более точную и детальную оценку различных аспектов творческого потенциала Вашего ребёнка и помочь развить его. Для этого мы рекомендуем выбрать удобную подписку на нашу платформу, смотреть видео и зарабатывать лайки. Персональную консультацию психолога по скайпу можно получить, заработав 100 лайков. Удачи!');
    } else if (TT == 7) {

      $('.conclusion__num').text('7-8');
      $('.conclusion__num').css({
        "color": "#fc3e21"
      });
      $('.conclusion__text').text('Общий творческий потенциал Вашего ребёнка значительно превосходит средний уровень. Посмотрите на графике, какие именно качества у него развиты в наибольшей степени. Мы советуем серьёзно подумать о   дальнейшем развитии его способностей. Для этого мы рекомендуем выбрать удобную подписку  на  нашу  платформу, смотреть видео, зарабатывать лайки и тратить их на приобретение разнообразных творческих курсов!');
    } else if (TT == 8) {

      $('.conclusion__num').text('7-8');
      $('.conclusion__num').css({
        "color": "#fc3e21"
      });
      $('.conclusion__text').text('Общий творческий потенциал Вашего ребёнка значительно превосходит средний уровень. Посмотрите на графике, какие именно качества у него развиты в наибольшей степени. Мы советуем серьёзно подумать о   дальнейшем развитии его способностей. Для этого мы рекомендуем выбрать удобную подписку  на  нашу  платформу, смотреть видео, зарабатывать лайки и тратить их на приобретение разнообразных творческих курсов!');
    } else if (TT == 9) {

      $('.conclusion__num').text('9-10');
      $('.conclusion__num').css({
        "color": "#8c0000"
      });
      $('.conclusion__text').text('У Вашего ребёнка очень высокий и разносторонний творческий потенциал. Посмотрите на графике, какие именно качества у него развиты в наибольшей степени. Мы настоятельно рекомендуем серьезно подумать о дальнейшем развитии его способностей. Возможно, Ваш ребёнок способен добиться больших успехов в творческих профессиях. Для этого мы рекомендуем выбрать удобную подписку на нашу платформу, смотреть видео, зарабатывать лайки и тратить их на приобретение разнообразных творческих курсов!');
    } else if (TT == 10) {

      $('.conclusion__num').text('9-10');
      $('.conclusion__num').css({
        "color": "#8c0000"
      });
      $('.conclusion__text').text('У Вашего ребёнка очень высокий и разносторонний творческий потенциал. Посмотрите на графике, какие именно качества у него развиты в наибольшей степени. Мы настоятельно рекомендуем серьезно подумать о дальнейшем развитии его способностей. Возможно, Ваш ребёнок способен добиться больших успехов в творческих профессиях. Для этого мы рекомендуем выбрать удобную подписку на нашу платформу, смотреть видео, зарабатывать лайки и тратить их на приобретение разнообразных творческих курсов!');
    }
  });
  $('.interview__answer').bind("change keyup input click", function () {
    if (this.value.match(/[^1-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value > 10 || this.value == 0) this.value = this.value.slice(0, -1);
  });

  var ACm1 = void 0,
      TG1 = void 0,
      TEm1 = void 0,
      MCm = void 0;

  $(".interview__btn").click(function () {

    ACm1 = +$('#1').val() + +$('#3').val() + +$('#6').val();
    MCm = +$('#3').val();
    TEm1 = +$('#2').val() + +$('#3').val() + +$('#4').val();
    TG1 = +$('#2').val() + +$('#5').val();
    console.log(ACm1, MCm, TEm1, TG1);
  });
  // первый тест на чувство ритма

  // пример
  $('.music-test-drum__list-item_one .music-test-drum__play-example-img').click(soundClick_11);

  function soundClick_11() {
    var audio_11 = new Audio(); // Создаём новый элемент Audio
    audio_11.src = ''; // Указываем путь к звуку "клика"
    audio_11.play(); // Автоматически запускаем
  }

  // звук 
  $('.music-test-drum__list-item_one .music-test-drum__lose-beat').click(soundClick_12);

  function soundClick_12() {
    var audio_12 = new Audio(); // Создаём новый элемент Audio
    audio_12.src = ''; // Указываем путь к звуку "клика"
    audio_12.play(); // Автоматически запускаем
  }

  // второй тест на чувство ритма

  // пример
  $('.music-test-drum__list-item_two .music-test-drum__play-example-img').click(soundClick_13);

  function soundClick_13() {
    var audio_13 = new Audio(); // Создаём новый элемент Audio
    audio_13.src = ''; // Указываем путь к звуку "клика"
    audio_13.play(); // Автоматически запускаем
  }

  // звук 

  $('.music-test-drum__list-item_two .music-test-drum__lose-beat').click(soundClick_14);

  function soundClick_14() {
    var audio_14 = new Audio(); // Создаём новый элемент Audio
    audio_14.src = ''; // Указываем путь к звуку "клика"
    audio_14.play(); // Автоматически запускаем
  }

  // прохождение первого теста

  var Chp1 = 0,
      Chp2 = 0,
      MC = void 0;

  // переменные при расчете нажатия первой кнопки
  var ArrClickTimes = [],
      clickTimeDown,
      clickTimeUp,
      shortPress = 0,
      longPress = 0,
      totalPress = 0;

  // переменные при расчете нажатия второй кнопки
  var ArrClickTimes2 = [],
      clickTimeDown2,
      clickTimeUp2,
      shortPress2 = 0,
      longPress2 = 0,
      totalPress2 = 0;

  // расчет нажатия первой кнопки
  $(".music-test-drum__list-item_one .music-test-drum__lose-beat").on('mousedown', function () {
    clickTimeDown = new Date().getTime();
    totalPress += 1;
  });

  $(".music-test-drum__list-item_one .music-test-drum__lose-beat").on('mouseup', function () {
    clickTimeUp = new Date().getTime();
    var difference = (clickTimeUp - clickTimeDown) / 1000;
    ArrClickTimes.push(difference);

    console.log(ArrClickTimes);
  });

  // расчет нажатия второй кнопки
  $(".music-test-drum__list-item_two .music-test-drum__lose-beat").on('mousedown', function () {
    clickTimeDown2 = new Date().getTime();
    totalPress2 += 1;
  });

  $(".music-test-drum__list-item_two .music-test-drum__lose-beat").on('mouseup', function () {
    clickTimeUp2 = new Date().getTime();
    var difference2 = (clickTimeUp2 - clickTimeDown2) / 1000;
    ArrClickTimes2.push(difference2);

    console.log(ArrClickTimes2);
  });

  // проводим подсчет баллов при нажатии на кнопку "Понятно"
  $('.music-test-drum__btn').click(function () {

    // перебираем вервый массив 
    $.each(ArrClickTimes, function (ind, val) {
      if (+val > 0.1 && +val < 0.4) {
        shortPress += 1;
      } else if (+val > 0.4 && +val < 0.7) {
        longPress += 1;
      }
    });

    if (totalPress > 6 && shortPress != 2 && longPress != 4) {
      Chp1 = 0;
    } else if (totalPress == 6 && shortPress == 2 && longPress == 4) {
      Chp1 = 1;
    };

    // перебираем второй массив 
    $.each(ArrClickTimes2, function (ind, val) {
      if (+val > 0.2 && +val < 0.4) {
        shortPress2 += 1;
      } else if (+val > 0.5 && +val < 0.9) {
        longPress2 += 1;
      }
    });

    if (totalPress2 > 5 && shortPress2 != 3 && longPress2 != 2) {
      Chp2 = 0;
    } else if (totalPress2 == 5 && shortPress2 == 3 && longPress2 == 2) {
      Chp2 = 1;
    }

    MC = (ZC + Chp1 + Chp2) * 10 / 5;

    console.log(Chp2, Chp1);
  });
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
  var ZC = 0;

  // собираем баллы за тест
  $(".music-test__btn").click(function () {
    $('.music-test input:checkbox:checked').each(function (i, element) {
      ArrZC.push($(element).attr('data-ZC'));
    });
    console.log(ArrZC);
  });

  $.each(ArrZC, function (ind, val) {
    ZC += +val;
  });
  $('.sense-rhythm__play-example-img').click(soundClick_10);
  $('.sense-rhythm__lose-beat').click(soundClick_10);

  function soundClick_10() {
    var audio_10 = new Audio(); // Создаём новый элемент Audio
    audio_10.src = ''; // Указываем путь к звуку "клика"
    audio_10.play(); // Автоматически запускаем
  }
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