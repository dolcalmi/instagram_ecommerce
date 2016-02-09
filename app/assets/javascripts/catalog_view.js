$(document).on('ready page:change', function() {
  catalogSize();
  $(window).on('resize', catalogSize);
  if (!$('.book__container').hasClass('hidden')) {

  }
});

function catalogSize () {
  if (window.matchMedia("(min-width: 1000px)").matches){
    $('.book__container').removeClass('hidden');
    $('.small__catalog').addClass('hidden');
  } else {
    $('.book__container').addClass('hidden');
    $('.small__catalog').removeClass('hidden');
  }
}