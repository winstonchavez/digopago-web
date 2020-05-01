$(document).ready( () => {

  $('.question-div').hide();
  $('.question-text-hide').hide();

  $(".question-text").click( () => {
    $('.question-div').show();
    $(".question-text").hide();
    $(".question-text-hide").show();
  } );

  $(".question-text-hide").click( () => {
    $('.question-div').hide();
    $(".question-text-hide").hide();
    $(".question-text").show();
  } );

  $('.question-div-2').hide();
  $('.question-text-hide-2').hide();

  $(".question-text-2").click( () => {
    $('.question-div-2').show();
    $(".question-text-2").hide();
    $(".question-text-hide-2").show();
  } );

  $(".question-text-hide-2").click( () => {
    $('.question-div-2').hide();
    $(".question-text-hide-2").hide();
    $(".question-text-2").show();
  } );

  $('.question-div-3').hide();
  $('.question-text-hide-3').hide();

  $(".question-text-3").click( () => {
    $('.question-div-3').show();
    $(".question-text-3").hide();
    $(".question-text-hide-3").show();
  } );

  $(".question-text-hide-3").click( () => {
    $('.question-div-3').hide();
    $(".question-text-hide-3").hide();
    $(".question-text-3").show();
  } );

});