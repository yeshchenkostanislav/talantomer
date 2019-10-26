$('.interview__answer').bind("change keyup input click", function () {
  if (this.value.match(/[^1-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
  if (this.value > 10 || this.value == 0) this.value = this.value.slice(0, -1);
});

let ACm1,
  TG1,
  TEm1,
  MCm;

$(".interview__btn").click(function () {

  ACm1 = +$('#1').val() + +$('#3').val() + +$('#6').val();
  MCm = +$('#3').val();
  TEm1 = +$('#2').val() + +$('#3').val() + +$('#4').val();
  TG1 = +$('#2').val() + +$('#5').val();
  console.log(ACm1, MCm, TEm1, TG1);

});