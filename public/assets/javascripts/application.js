$(document).ready(function() {
  
  $('.gift_pane .claim_button').click(function() {
    $('#request_email').fadeIn();
  });
  
  $('.claim_box .button_claim').click(function() {
    $('.lightbox_wrapper').fadeOut();
    $('#process_completed').fadeIn(1500);
  });
  
  $('.lightbox_wrapper').click(function() {
    $('.lightbox_wrapper').fadeOut();
  });
  
  $('.claim_box').click(function(e) {
    e.stopPropagation();
  });
  
});