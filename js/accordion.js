$(document).ready(function() {
  $('.catalog__accordion__title').click(function(event) {
    $('.catalog__accordion__title').not($(this)).removeClass('accordion_active');
    $('.catalog__accordion__text').not($(this).next()).slideUp(300);
    $('.catalog__accordion__empty').not($(this).next()).slideUp(300);
    $(this).toggleClass('accordion_active').next().slideToggle(400);
  });
})