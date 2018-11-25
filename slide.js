// トップスクロールボタンの関数

$(function() {

  var $pagetop = $('#pagetop');

  $pagetop.hide();

  $(window).on( 'scroll', function () {
    // 表示方法
    if ( $(this).scrollTop() < 100 ) {
      $pagetop.fadeOut('slow');
    } else {

      $pagetop.fadeIn('slow');
    }
  });


// ボタンの動き

  $('a[href^="#"]').click(function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({
          scrollTop: position
      }, 500, "swing");
      return false;
  });
});
