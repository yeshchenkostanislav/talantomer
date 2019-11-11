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
    mySwiper.slideNext();
  });
  $('.creative-energy__btn').click(function () {
    mySwiper.slideNext();
  });
  $('.creativeness__btn').click(function () {
    mySwiper.slideNext();
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
  });
  $('.ear-music__checkbox').click(function () {
    $('.ear-music__checkbox').each(function (i, element) {
      $(element).prop('checked', false);
    });
    $(this).prop('checked', true);
  });

  // пример
  $('.ear-music__text-play').click(proba);
  $('.ear-music__play-example-img').click(proba);

  var proba = $(".proba")[0];

  function proba() {

    proba.pause();
    proba1.pause();
    proba2.pause();
    proba3.pause();

    if (proba.paused) {
      proba.currentTime = 0;
      proba.play();
    } else {
      proba.pause();
    }
  }

  $('.ear-music__label_one').click(proba1);
  $('.ear-music__label_two').click(proba2);
  $('.ear-music__label_three').click(proba3);

  var proba1 = $(".proba1")[0];

  function proba1() {

    proba2.pause();
    proba3.pause();

    if (proba1.paused) {
      proba1.currentTime = 0;
      proba1.play();
    } else {
      proba1.pause();
    }
  }

  var proba2 = $(".proba2")[0];

  function proba2() {

    proba1.pause();
    proba3.pause();

    if (proba2.paused) {
      proba2.currentTime = 0;
      proba2.play();
    } else {
      proba2.pause();
    }
  }

  var proba3 = $(".proba3")[0];

  function proba3() {

    proba1.pause();
    proba2.pause();

    if (proba3.paused) {
      proba3.currentTime = 0;
      proba3.play();
    } else {
      proba3.pause();
    }
  }

  $('.ear-music__btn').click(function () {
    if ($('.ear-music input:checkbox:checked').length == 1) {
      mySwiper.slideNext();
    }
  });
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

    /* console.log(ArrAC);
    console.log(ACsum1); */

    if ($('.emotion-test input:checkbox:checked').length == 4) {
      mySwiper.slideNext();
    }
  });

  var ArrAC = [];
  var ACsum1 = 0;
  var mySwiper = new Swiper('.swiper-container', {
    autoHeight: true,
    centeredSlides: true,
    touchRatio: 0,
    //loop: true,
    navigation: {
      //nextEl: '.swiper-btn-next',
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

    /*   console.log(ACm2, BKm, TEm2, TG2); */

    ACm = (ACm1 + ACm2) / 5;
    TEm = (TEm1 + TEm2) / 5;
    TG = (TG1 + TG2) / 5;

    /*  console.log(ACm, MCm, TEm, BKm, TG); */

    TvEn = Math.ceil(TZ + TEm); // ТвЭн = ТЭ + ТЭм , в формулах ошибка ТЭ это TZ
    AktCp = Math.ceil(ACm + AC); //  АктСп = АС + АСм 
    VizKp = Math.ceil((3 * BK + BKm) / 2); // ВизКр = (3*ВК + ВКм)/2
    MyzCp = Math.ceil((3 * MC + MCm) / 2); // МузСп = (3*МС + МСм)/2
    TvGk = Math.ceil(TG * 2); // ТвГк = ТГ*2

    /*  console.log(TvEn, AktCp, VizKp, MyzCp, TvGk); */

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
    } else if (TvGk == 8) {
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

    /*  console.log("TvEnSten " + TvEnSten, "AktCpSten " + AktCpSten, "VizKpSten " + VizKpSten, "MyzCpSten " + MyzCpSten, "TvGkSten " + TvGkSten);
     console.log("Расчет ТТ " + TT); */

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
    // проверяем что все инпуты заполнены
    var inp2 = 0;
    $('.interview-two input').each(function (i, item) {
      if ($(item).val()) {
        inp2 += 1;
      }
    });

    if (inp2 >= 6) {
      mySwiper.slideNext();
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

    /*   console.log(ACm1, MCm, TEm1, TG1); */

    var inp = 0;
    $('.interview input').each(function (i, item) {
      if ($(item).val()) {
        inp += 1;
      }
    });

    if (inp >= 6) {
      mySwiper.slideNext();
    }
  });
  $('.main__btn').click(function () {
    mySwiper.slideNext();
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
  /* $('.music-test-drum__list-item_one .music-test-drum__lose-beat').click(drums);
  $('.music-test-drum__list-item_two .music-test-drum__lose-beat').click(drums); */

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

    /*   console.log(ArrClickTimes); */
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

    /*  console.log(ArrClickTimes2); */
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

    /*  console.log(Chp2, Chp1);
     console.log(MC); */

    if (ArrClickTimes.length > 1 || ArrClickTimes2.length > 1) {
      mySwiper.slideNext();
    }
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

    /*   console.log(ArrZC);
      console.log(ZC); */

    if ($('.music-test input:checkbox:checked').length == 3) {
      mySwiper.slideNext();
    }
  });
  $('.section-one__btn').click(function () {
    mySwiper.slideNext();
  });
  $('.section-two__btn').click(function () {
    mySwiper.slideNext();
  });
  $('.sense-rhythm__play-example-img').click(taskExample);
  $('.sense-rhythm__text-play').click(taskExample);
  //$('.sense-rhythm__lose-beat').click(drums);

  var taskExample = $(".taskExample")[0];

  function taskExample() {
    if (taskExample.paused) {
      taskExample.currentTime = 0;
      taskExample.play();
    } else {
      taskExample.pause();
    }
  }

  $('.sense-rhythm__btn').click(function () {
    mySwiper.slideNext();
  });
  $('.underst-emotions__btn').click(function () {
    mySwiper.slideNext();
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
  });

  var ArrBK = [];
  var BKsum = 0;
});