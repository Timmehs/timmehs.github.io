$(function() {

  var switchContent = function (event) {
    var $nav = $(event.currentTarget)[0];
    var content = $(event.currentTarget).data('id');
    var $navs = $('i');

    _.each($navs, function(nav) {
      nav == $nav ? showContent(content) : hideContent($(nav).data('id'));

    });

  };

  var showContent = function (content) {
    $('.selector.' + content).addClass('active');
    $('.content-pane.' + content).addClass('active');
    $('i.' + content).addClass('active');
  }

  var hideContent = function (content) {
    $('.selector.' + content).removeClass('active');
    $('content-pane.' + content).removeClass('active');
    $('i.' + content).removeClass('active');
  };

  $('i').on("click", switchContent);


});
