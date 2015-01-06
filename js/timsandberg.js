$(function() {

  var sendEmail = function(event) {
    $.ajax({
      url: "http://forms.brace.io/tasandberg@gmail.com",
      method: "POST",
      data: {message: "hello!"},
      dataType: "json"
    });

  };

  $('form').on("submit", sendEmail);
});
