$(function() {

$(document).ready(function() {

/* mobile navigation */

var mq = window.matchMedia( "(max-device-width : 420px)" );

if (mq.matches) {

  $('#cu').attr('id', 'hi');
  $('.nav').hide();
  $('#dropDown').show();
} else {
  $('.nav').show();
  $('#dropDown').hide();
}

/* show old events + button */

$('.events > tbody tr:not(.new)').hide();

$('#btn').click(function(){
  $('.events > tbody tr').show();
  $('#btn').hide();
});

/* table width fix */

$('.events > tbody td:first-child').css('width', '120px');
$('.events > tbody td:nth-child(2)').css('width', '180px');

/* lightbox

lightbox.option({
     'maxWidth': 1280,
     'maxHeight': 1280,
     'disableScrolling' :	false,
     'fitImagesInViewport' : false,
     'wrapAround': true,
   })

/* sticky header

function sticky_relocate() {
 var window_top = $(window).scrollTop();
 var div_top = $('#sticky-anchor').offset().top;
 if (window_top > div_top) {
     $('#sticky').addClass('stick');
 }
};  $(window).scroll(sticky_relocate); sticky_relocate();


/* alt script for old event

$('#col > tbody tr:not(.new)').addClass("old");

/* reverse order for events

$(function(){
    $("#col > tbody").each(function(elem,index){
      var arr = $.makeArray($("tr",this).detach());
      arr.reverse();
        $(this).append(arr);
    });
});

/* highlighting chosen link

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

   });
 });
