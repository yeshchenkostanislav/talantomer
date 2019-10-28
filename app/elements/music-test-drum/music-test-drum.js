// первый тест на чувство ритма

// пример
$('.music-test-drum__list-item_one .music-test-drum__play-example-img').click(testDrums);
$('.music-test-drum__list-item_two .music-test-drum__play-example-img').click(testDrums2);

function testDrums() {
  let testDrums = new Audio();
  testDrums.src = 'http://d.zaix.ru/fm2t.mp3';
  testDrums.play();
}

function testDrums2() {
  let testDrums2 = new Audio();
  testDrums2.src = 'http://d.zaix.ru/fm2u.mp3';
  testDrums2.play();
}

// звук 
$('.music-test-drum__list-item_one .music-test-drum__lose-beat').click(drums);
$('.music-test-drum__list-item_two .music-test-drum__lose-beat').click(drums);

function drums() {
  let drums = new Audio(); // Создаём новый элемент Audio
  drums.src = 'http://d.zaix.ru/fm2N.mp3'; // Указываем путь к звуку "клика"
  drums.play(); // Автоматически запускаем
}


// прохождение первого теста

let Chp1 = 0,
  Chp2 = 0,
  MC;

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
  let difference = (clickTimeUp - clickTimeDown) / 1000;
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
  let difference2 = (clickTimeUp2 - clickTimeDown2) / 1000;
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

})