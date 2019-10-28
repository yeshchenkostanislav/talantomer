$('.conclusion__btn').click(function () {

  $('.ability-graph__list-box_TZ .ability-graph__list-box-item').each(function (i) {

    if (i < TvEnSten) {

      $(this).css({
        'background-color': '#fc3e21'
      })
    }
  });

  $('.ability-graph__list-box_AC .ability-graph__list-box-item').each(function (i, elem) {

    if (i < AktCpSten) {
      $(elem).css({
        'background-color': '#ceff00'
      })
    }
  });

  $('.ability-graph__list-box_BK .ability-graph__list-box-item').each(function (i, elem) {

    if (i < VizKpSten) {
      $(elem).css({
        'background-color': '#006bff'
      })
    }
  });

  $('.ability-graph__list-box_MC .ability-graph__list-box-item').each(function (i, elem) {

    if (i < MyzCpSten) {
      $(elem).css({
        'background-color': '#ffd600'
      })
    }
  });

  $('.ability-graph__list-box_TG .ability-graph__list-box-item').each(function (i, elem) {

    if (i < TvGkSten) {
      $(elem).css({
        'background-color': '#8c0000'
      })
    }
  });

});