$('.ear-music__notes-example-list .ear-music__label').click(function () {
  $('.ear-music__notes-example-list .ear-music__label').each(function (index, value) {
    $(index).prop("checked", false);
  });
  $(this).prop("checked", true);
});