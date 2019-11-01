// запрещаем ввод текста
$('.interview-two__answer').bind("change keyup input click", function () {
  if (this.value.match(/[^1-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
  // ограничиваем ввод максимально до 10 числа включительно
  if (this.value > 10 || this.value == 0) this.value = this.value.slice(0, -1);
});

let ACm2,
  TEm2,
  BKm,
  TG2;


let ACm,
  TEm,
  TG;


let TvEn, // ТвЭн = ТЭ + ТЭм 
  AktCp, //  АктСп = АС + АСм 
  VizKp, // ВизКр = (3*ВК + ВКм)/2
  MyzCp, // МузСп = (3*МС + МСм)/2
  TvGk; // ТвГк = ТГ*2

let TvEnSten,
  AktCpSten,
  VizKpSten,
  MyzCpSten,
  TvGkSten;

let TT; // финальный расчетный балл



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
      })
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
      })
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
  let inp2 = 0;
  $('.interview-two input').each(function (i, item) {
    if ($(item).val()) {
      inp2 += 1;
    }
  })

  if (inp2 >= 6) {
    mySwiper.slideNext();
  }

});