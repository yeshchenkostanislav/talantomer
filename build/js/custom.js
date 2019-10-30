'use strict';

$('document').ready(function () {
  $('.conclusion__btn').click(function () {

    $('.ability-graph__list-box_TZ .ability-graph__list-box-item').each(function (i) {

      if (i < TvEnSten) {

        $(this).css({
          'background-color': '#fc3e21'
        });
      }
    });

    $('.ability-graph__list-box_AC .ability-graph__list-box-item').each(function (i, elem) {
      if (i < AktCpSten) {
        $(elem).css({
          'background-color': '#ceff00'
        });
      }
    });

    $('.ability-graph__list-box_BK .ability-graph__list-box-item').each(function (i, elem) {

      if (i < VizKpSten) {
        $(elem).css({
          'background-color': '#006bff'
        });
      }
    });

    $('.ability-graph__list-box_MC .ability-graph__list-box-item').each(function (i, elem) {

      if (i < MyzCpSten) {
        $(elem).css({
          'background-color': '#ffd600'
        });
      }
    });

    $('.ability-graph__list-box_TG .ability-graph__list-box-item').each(function (i, elem) {

      if (i < TvGkSten) {
        $(elem).css({
          'background-color': '#8c0000'
        });
      }
    });
  });
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

  var ArrTE = [];
  var TEsum = 0;
  var TZ = void 0; // это переменная ТЗ
  //let TE = TZ; 

  var ArrAC2 = [];
  var ACsum2 = 0;
  var AC = void 0; // это переменная AC

  var BK4 = void 0;
  var BK = void 0; // это переменная BK

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

    console.log("Массив ArrTE " + ArrTE);
    console.log("Сумма массива ArrTE " + TEsum);
    console.log("Подсчет переменной TZ " + TZ);

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

    console.log("Массив ArrAC2 " + ArrAC2);
    console.log("Сумма массива ACsum2 " + ACsum2);
    console.log("Подсчет переменной AC " + AC);

    // перебираем все чекбоксы и получаем аттрибут data-BK
    $('.creativity-test input:checkbox:checked').each(function (i, element) {

      if ($(element).attr('data-BK')) {
        BK4 = $(element).attr('data-BK');
      }
    });

    BK = (BKsum + BK4) * 10 / 4;

    console.log("Переменная BK4 " + BK4);
    console.log("Подсчет переменной BK " + BK);
  });
  $('.ear-music__checkbox').click(function () {
    $('.ear-music__checkbox').each(function (i, element) {
      $(element).prop('checked', false);
    });
    $(this).prop('checked', true);
  });

  // пример
  $('.ear-music__text-play').click(example);

  var example = $(".example")[0];

  function example() {
    if (example.paused) {
      example.currentTime = 0;
      example.play();
    } else {
      example.pause();
    }
  }

  $('.ear-music__play-example-img').click(audioTest2);
  $('.ear-music__label_one').click(note);
  $('.ear-music__label_two').click(note2);
  $('.ear-music__label_three').click(note3);
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
  });

  $('.emotion-test__btn').click(function () {

    //при клике на кнопку , собираются все значения
    $('.emotion-test input:checkbox:checked').each(function (i, element) {
      ArrAC.push($(element).attr('data-AC'));
    });

    $.each(ArrAC, function (ind, val) {
      ACsum1 += +val;
    });

    console.log(ArrAC);
    console.log(ACsum1);
  });

  var ArrAC = [];
  var ACsum1 = 0;
  var mySwiper = new Swiper('.swiper-container', {
    autoHeight: true,
    centeredSlides: true,
    touchRatio: 1,
    loop: true,
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
  // запрещаем ввод текста
  $('.interview-two__answer').bind("change keyup input click", function () {
    if (this.value.match(/[^1-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    // ограничиваем ввод максимально до 10 числа включительно
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

    ACm = (ACm1 + ACm2) / 5;
    TEm = (TEm1 + TEm2) / 5;
    TG = (TG1 + TG2) / 5;

    console.log(ACm, MCm, TEm, BKm, TG);

    TvEn = Math.ceil(TZ + TEm); // ТвЭн = ТЭ + ТЭм , в формулах ошибка ТЭ это TZ
    AktCp = Math.ceil(ACm + AC); //  АктСп = АС + АСм 
    VizKp = Math.ceil((3 * BK + BKm) / 2); // ВизКр = (3*ВК + ВКм)/2
    MyzCp = Math.ceil((3 * MC + MCm) / 2); // МузСп = (3*МС + МСм)/2
    TvGk = Math.ceil(TG * 2); // ТвГк = ТГ*2

    console.log(TvEn, AktCp, VizKp, MyzCp, TvGk);

    if (TvEn == 1) {
      TvEnSten = 1;
    } else if (TvEn == 2) {
      TvEnSten = 2;
    } else if (TvEn == 3 || TvEn == 4) {
      TvEnSten = 3;
    } else if (TvEn == 5) {
      TvEnSten = 4;
    } else if (TvEn == 6 || TvEn == 7) {
      TvEnSten = 5;
    } else if (TvEn == 8) {
      TvEnSten = 6;
    } else if (TvEn == 9 || TvEn == 10) {
      TvEnSten = 7;
    } else if (TvEn > 10 && TvEn < 15) {
      TvEnSten = 8;
    } else if (TvEn > 14 && TvEn < 19) {
      TvEnSten = 9;
    } else if (TvEn > 18) {
      TvEnSten = 10;
    };

    if (AktCp == 1) {
      AktCpSten = 1;
    } else if (AktCp == 2) {
      AktCpSten = 2;
    } else if (AktCp == 3 || AktCp == 4) {
      AktCpSten = 3;
    } else if (AktCp == 5) {
      AktCpSten = 4;
    } else if (AktCp == 6 || AktCp == 7) {
      AktCpSten = 5;
    } else if (AktCp == 8) {
      AktCpSten = 6;
    } else if (AktCp == 9 || AktCp == 10) {
      AktCpSten = 7;
    } else if (AktCp == 11 || AktCp == 12) {
      AktCpSten = 8;
    } else if (AktCp > 12 && AktCp < 18) {
      AktCpSten = 9;
    } else if (AktCp > 17) {
      AktCpSten = 10;
    };

    if (VizKp == 1) {
      VizKpSten = 1;
    } else if (VizKp == 2) {
      VizKpSten = 2;
    } else if (VizKp == 3) {
      VizKpSten = 3;
    } else if (VizKp == 4 || VizKp == 5) {
      VizKpSten = 4;
    } else if (VizKp == 6 || VizKp == 7) {
      VizKpSten = 5;
    } else if (VizKp == 8) {
      VizKpSten = 6;
    } else if (VizKp == 9 || VizKp == 10) {
      VizKpSten = 7;
    } else if (VizKp > 10 && VizKp < 14) {
      VizKpSten = 8;
    } else if (VizKp > 13 && VizKp < 18) {
      VizKpSten = 9;
    } else if (VizKp > 17) {
      VizKpSten = 10;
    };

    if (MyzCp == 1) {
      MyzCpSten = 1;
    } else if (MyzCp == 2) {
      MyzCpSten = 2;
    } else if (MyzCp == 3 || MyzCp == 4) {
      MyzCpSten = 3;
    } else if (MyzCp == 5) {
      MyzCpSten = 4;
    } else if (MyzCp == 6 || MyzCp == 7) {
      MyzCpSten = 5;
    } else if (MyzCp == 8) {
      MyzCpSten = 6;
    } else if (MyzCp == 9 || MyzCp == 10) {
      MyzCpSten = 7;
    } else if (MyzCp > 10 && MyzCp < 14) {
      MyzCpSten = 8;
    } else if (MyzCp > 13 && MyzCp < 18) {
      MyzCpSten = 9;
    } else if (MyzCp > 17) {
      MyzCpSten = 10;
    };

    if (TvGk == 1) {
      TvGkSten = 1;
    } else if (TvGk == 2) {
      TvGkSten = 2;
    } else if (TvGk == 3 || TvGk == 4) {
      TvGkSten = 3;
    } else if (TvGk == 5) {
      TvGkSten = 4;
    } else if (TvGk == 6 || TvGk == 7) {
      TvGkSten = 5;
    } else if (MyzCp == 8) {
      TvGkSten = 6;
    } else if (TvGk == 9 || TvGk == 10) {
      TvGkSten = 7;
    } else if (TvGk > 10 && TvGk < 15) {
      TvGkSten = 8;
    } else if (TvGk > 14 && TvGk < 19) {
      TvGkSten = 9;
    } else if (TvGk > 18) {
      TvGkSten = 10;
    };

    TT = Math.ceil((TvEnSten + AktCpSten + VizKpSten + MyzCpSten + TvGkSten) / 5); // TТ = (ТвЭн стен + АктСп стен + ВизКр стен + МузСп стен + ТвГк стен)/5   округляем до целых

    console.log("TvEnSten " + TvEnSten, "AktCpSten " + AktCpSten, "VizKpSten " + VizKpSten, "MyzCpSten " + MyzCpSten, "TvGkSten " + TvGkSten);
    console.log("Расчет ТТ " + TT);

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
  // запрещаем ввод текста
  $('.interview__answer').bind("change keyup input click", function () {
    if (this.value.match(/[^1-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }

    // ограничиваем ввод максимально до 10 числа включительно
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
  $('.music-test-drum__list-item_one .music-test-drum__play-example-img').click(testDrums);
  $('.music-test-drum__list-item_two .music-test-drum__play-example-img').click(testDrums2);

  var drumExample = $(".drum-example")[0];
  var bitbox = $(".bitbox")[0];

  function testDrums() {

    bitbox.pause();

    if (drumExample.paused) {
      drumExample.currentTime = 0;
      drumExample.play();
    } else {
      drumExample.pause();
    }
  }

  function testDrums2() {

    drumExample.pause();

    if (bitbox.paused) {
      bitbox.currentTime = 0;
      bitbox.play();
    } else {
      bitbox.pause();
    }
  }

  // звук 
  $('.music-test-drum__list-item_one .music-test-drum__lose-beat').click(drums);
  $('.music-test-drum__list-item_two .music-test-drum__lose-beat').click(drums);

  function drums() {
    var drums = new Audio(); // Создаём новый элемент Audio
    drums.src = 'http://d.zaix.ru/fm2N.mp3'; // Указываем путь к звуку "клика"
    drums.play(); // Автоматически запускаем
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
    console.log(MC);
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

  $('.music-test__list-item_one .music-test__label_one').click(note2);
  $('.music-test__list-item_one .music-test__label_two').click(note);
  $('.music-test__list-item_one .music-test__label_three').click(note3);

  $('.music-test__list-item_two .music-test__label_one').click(note2);
  $('.music-test__list-item_two .music-test__label_two').click(note);
  $('.music-test__list-item_two .music-test__label_three').click(note3);

  $('.music-test__list-item_three .music-test__label_one').click(note);
  $('.music-test__list-item_three .music-test__label_two').click(note3);
  $('.music-test__list-item_three .music-test__label_three').click(note2);

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

  var ArrZC = [];
  var ZC = 0;

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
  });
  $('.sense-rhythm__play-example-img').click(taskExample);
  $('.sense-rhythm__text-play').click(taskExample);
  $('.sense-rhythm__lose-beat').click(drums);

  var taskExample = $(".taskExample")[0];

  function taskExample() {
    if (taskExample.paused) {
      taskExample.currentTime = 0;
      taskExample.play();
    } else {
      taskExample.pause();
    }
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
  });

  $(".visual-creativity__btn").click(function () {

    //при клике на кнопку, собираются все значения
    $('.visual-creativity input:checkbox:checked').each(function (i, element) {
      ArrBK.push($(element).attr('data-BK'));
    });

    $.each(ArrBK, function (ind, val) {
      BKsum += +val;
    });

    console.log(ArrBK);
    console.log(BKsum);
  });

  var ArrBK = [];
  var BKsum = 0;
});