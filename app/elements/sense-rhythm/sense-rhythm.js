$('.sense-rhythm__play-example-img').click(taskExample);
$('.sense-rhythm__text-play').click(taskExample);
$('.sense-rhythm__lose-beat').click(drums);

function taskExample() {
  let taskExample = new Audio(); // Создаём новый элемент Audio
  taskExample.src = 'http://d.zaix.ru/fm2q.mp3'; // Указываем путь к звуку "клика"
  taskExample.play(); // Автоматически запускаем
}