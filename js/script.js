var showSpinner = function() {
  $('.loading-icon').show();
}
var hideSpinner = function() {
  $('.loading-icon').hide();
}

var hideSpinnerSlow = function() {
  setTimeout(function() {
    $('.loading-icon').hide();
  }, 2000);
}

var hideFakeImage = function() { $('#results').fadeOut(); }
var showFakeImage = function() { $('#results').fadeIn(); }

// // Scroll event handlers
// $(window).scroll(function() {
//   if ($(this).scrollTop() > 140) {
//     $('header').fadeOut();
//   }
// });

$(".analyse").click(function() {
  var base64Data = $('.awesome-cropper').children('img').attr('src');
  showSpinner();

  showFakeImage();

  hideSpinnerSlow();

  // $.ajax({
  //   url: "http://127.0.0.1:5000/api/v1.0/image", // Flask API endpoint
  //   type: 'POST',
  //   data: base64Data,
  //   success: function (response) {
  //     $('#results').html('<strong>' + response + '</strong>');
  //     console.log("success: ", response);
  //     hideSpinner();
  //   },
  //   complete: function (response) {
  //     $('#results').html('<strong>' + response + '</strong>');
  //     console.log("complete: ", response);
  //     hideSpinner();
  //   },
  //   error: function (error) {
  //     $('#results').html('<strong>' + response + '</strong>');
  //     console.log("error: ", error);
  //     hideSpinner();
  //   }
  // });
});

$("#demo").click(function () {
  $('#results').html('');
});

$(document).ready(function () {
  hideFakeImage();
  hideSpinner();
  $('#demo').awesomeCropper({
    width: 200,
    height: 1000,
    debug: true
  });
  // $('#results').html('');
});
