// Scroll event handlers
$(window).scroll(function() {
  if ($(this).scrollTop() > 140) {
    $('header').fadeOut();
  }
});

$(".analyse").click(function() {
  var base64Data = $('.awesome-cropper').children('img').attr('src');
  $.ajax({
    url: "http://127.0.0.1:5000/api/v1.0/image", // Flask API endpoint
    type: 'POST',
    data: base64Data,
    success: function (response) {
      $('.analyse-status').html('<strong>Success</strong>');
      console.log("success: ", response);
    },
    complete: function (response) {
      $('.analyse-status').html('<strong>Complete</strong>');
      console.log("complete: ", response);
    },
    error: function (error) {
      $('.analyse-status').html('<strong>Error</strong>');
      console.log("error: ", error);
    }
  });
});

$("#demo").click(function () {
  $('.analyse-status').html('');
});

$(document).ready(function () {
  $('#demo').awesomeCropper({
    width: 200,
    height: 1000,
    debug: true
  });
  $('.analyse-status').html('');
});
