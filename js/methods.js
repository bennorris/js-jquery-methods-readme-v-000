'use strict';

function fancySchmancy() {
  $('p#bacon').addClass('iAmFancy');
  return $('p#bacon');
}

function addText(string) {
  $('p:nth-of-type(2)').append(string);
  return $('p:nth-of-type(2)');
}

function showDolphin() {
  $('img#hidden').show();
}

function hideImage() {
  $('img[alt="pie in face"]').hide();
}

function fadeIt() {
  $('div#favorite-snacks').fadeIn();
}

function fadeItOut() {
  $('p:nth-of-type(2)').fadeOut(0);
}

function findItByClass(x){
  return $(x).hasClass('flatironLink');
}

function formValue() {
  return $('input:last').val();
}
