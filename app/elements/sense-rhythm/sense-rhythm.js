$('.sense-rhythm__play-example-img').click(soundClick_10);
$('.sense-rhythm__lose-beat').click(soundClick_10);

function soundClick_10() {
  let audio_10 = new Audio(); // Создаём новый элемент Audio
  audio_10.src = ''; // Указываем путь к звуку "клика"
  audio_10.play(); // Автоматически запускаем
}