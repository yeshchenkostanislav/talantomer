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