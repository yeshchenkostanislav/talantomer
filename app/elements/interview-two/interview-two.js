$('.interview-two__answer').bind("change keyup input click", function () {
  if (this.value.match(/[^1-9]/g)) {
    this.value = this.value.replace(/[^0-9]/g, '');
  }
  if (this.value > 10 || this.value == 0) this.value = this.value.slice(0, -1);
});

let ACm2,
  TEm2,
  BKm,
  TG2;


let ACm = (ACm1 + ACm2) / 5,
  TEm = (TEm1 + TEm2) / 5,
  TG = (TG1 + TG2) / 5;


let TvEn = Math.ceil(TE + TEm), // ТвЭн = ТЭ + ТЭм 
  AktCp = Math.ceil(ACm + AC), //  АктСп = АС + АСм 
  VizKp = Math.ceil((3 * BK + BKm) / 2), // ВизКр = (3*ВК + ВКм)/2
  MyzCp = Math.ceil((3 * MC + MCm) / 2), // МузСп = (3*МС + МСм)/2
  TvGk = Math.ceil(TG * 2); // ТвГк = ТГ*2


$(".interview-two__btn").click(function () {

  ACm2 = +$('#10').val() + +$('#11').val();
  TEm2 = +$('#7').val() + +$('#9').val();
  BKm = +$('#7').val();
  TG2 = +$('#7').val() + +$('#8').val() + +$('#12').val();
  console.log(ACm2, BKm, TEm2, TG2);
  console.log(ACm, MCm, TEm, BKm, TG);


  if (TvEn == 1) {
    TvEnSten = 1;
  } else if (TvEn == 2) {
    TvEnSten = 2;
  } else if (TvEn == 3 || TvEn == 4) {
    TvEnSten = 3;
  } else if (TvEn == 5 || TvEn == 6) {
    TvEnSten = 4;
  } else if (TvEn == 6 || TvEn == 7) {
    TvEnSten = 5;
  } else if (TvEn == 8 || TvEn == 9) {
    TvEnSten = 6;
  } else if (TvEn == 9 || TvEn == 10) {
    TvEnSten = 7;
  } else if (TvEn > 10 && TvEn < 15) {
    TvEnSten = 8;
  } else if (TvEn > 13 && TvEn < 19) {
    TvEnSten = 9;
  } else if (TvEn > 18 && TvEn < 21) {
    TvEnSten = 10;
  };

  if (AktCp == 1) {
    AktCpSten = 1;
  } else if (AktCp == 2) {
    AktCpSten = 2;
  } else if (AktCp == 3 || AktCp == 4) {
    AktCpSten = 3;
  } else if (AktCp == 5 || AktCp == 6) {
    AktCpSten = 4;
  } else if (AktCp == 6 || AktCp == 7) {
    AktCpSten = 5;
  } else if (AktCp == 8 || AktCp == 9) {
    AktCpSten = 6;
  } else if (AktCp == 9 || AktCp == 10) {
    AktCpSten = 7;
  } else if (AktCp == 11 || AktCp == 12) {
    AktCpSten = 8;
  } else if (AktCp > 12 && AktCp < 18) {
    AktCpSten = 9;
  } else if (AktCp > 17 && AktCp < 21) {
    AktCpSten = 10;
  };


  if (VizKp == 1) {
    VizKpSten = 1;
  } else if (VizKp == 2) {
    VizKpSten = 2;
  } else if (VizKp == 3) {
    VizKpSten = 3;
  } else if (VizKp > 3 && VizKp < 7) {
    VizKpSten = 4;
  } else if (VizKp > 5 && VizKp < 8) {
    VizKpSten = 5;
  } else if (VizKp > 7 && VizKp < 10) {
    VizKpSten = 6;
  } else if (VizKp > 8 && VizKp < 11) {
    VizKpSten = 7;
  } else if (VizKp > 10 && VizKp < 14) {
    VizKpSten = 8;
  } else if (VizKp > 13 && VizKp < 18) {
    VizKpSten = 9;
  } else if (VizKp > 17 && VizKp < 21) {
    VizKpSten = 10;
  };


  if (MyzCp == 1) {
    MyzCpSten = 1;
  } else if (MyzCp == 2) {
    MyzCpSten = 2;
  } else if (MyzCp == 3 || MyzCp == 4) {
    AktCpSten = 3;
  } else if (MyzCp == 5 || MyzCp == 6) {
    AktCpSten = 4;
  } else if (MyzCp == 6 || MyzCp == 7) {
    AktCpSten = 4;
  };
});