$(function() {

$(document).ready(function() {

  function sticky_relocate() {
   var window_top = $(window).scrollTop();
   var div_top = $('#sticky-anchor').offset().top;
   if (window_top > div_top) {
       $('#sticky').addClass('stick');
   }
};  $(window).scroll(sticky_relocate);sticky_relocate();

  /*

  if (top.location.pathname === '/links/') {
    $('#links').attr('id', 'hi');
  } else if (top.location.pathname === '/events/') {
    $('#events').attr('id', 'hi');
  } else if (top.location.pathname === '/petitions/') {
    $('#petitions').attr('id', 'hi');
  } else if (top.location.pathname === '/organize/') {
    $('#organize').attr('id', 'hi');
  }

  */

var mq = window.matchMedia( "(max-device-width : 420px)" );

if (mq.matches) {

  $('#cu').attr('id', 'hi');
  $('.nav').hide();
  $('#dropDown').show();
} else {
  $('.nav').show();
  $('#dropDown').hide();
}

   });
 });
