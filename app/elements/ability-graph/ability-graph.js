$('.conclusion__btn').click(function () {

  $('.ability-graph__list-item_TZ .ability-graph__list-box-item').each(function (i, elem) {

    if ((i + 1) <= TZ) {
      $(elem).css({
        'background-color': '#fc3e21'
      })
    }
  });

  $('.ability-graph__list-item_AC .ability-graph__list-box-item').each(function (i, elem) {

    if ((i + 1) <= AC) {
      $(elem).css({
        'background-color': '#ceff00'
      })
    }
  });

  $('.ability-graph__list-item_BK .ability-graph__list-box-item').each(function (i, elem) {

    if ((i + 1) <= BK) {
      $(elem).css({
        'background-color': '#006bff'
      })
    }
  });

  $('.ability-graph__list-item_MC .ability-graph__list-box-item').each(function (i, elem) {

    if ((i + 1) <= MC) {
      $(elem).css({
        'background-color': '#ffd600'
      })
    }
  });

  $('.ability-graph__list-item_TG .ability-graph__list-box-item').each(function (i, elem) {

    if ((i + 1) <= TG) {
      $(elem).css({
        'background-color': '#8c0000'
      })
    }
  });

});