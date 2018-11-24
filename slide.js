$(function() {

  //下から表示させる要素を指定
  var $pagetop = $('#pagetop');
  //一定量スクロールするまで非表示
  $pagetop.hide();

  $(window).on( 'scroll', function () {
    //スクロール位置を取得
    if ( $(this).scrollTop() < 100 ) {
      //要素をスライド非表示
      $pagetop.fadeOut('slow');
    } else {
      //要素をスライド表示
      $pagetop.fadeIn('slow');
    }
  });

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
