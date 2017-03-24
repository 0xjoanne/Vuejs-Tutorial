$(document).ready(function() {
  $('iframe').each(function(i, obj){
    var src = $(obj).attr('data-url')
    $(obj).attr('data-src', src)
  })

  $('#fullpage').fullpage({
    lazyLoading: true,
    navigation: true,
    scrollingSpeed: 1000
  })
})
