$(document).ready(function(){

  $('.forwardLink').on('click', function(){
    var currentActiveImage = $('.image-visible');
    var nextActiveImage = currentActiveImage.next();

    if(nextActiveImage.length == 0)
    {
      nextActiveImage = $('.carousel-inner img').first();
    }

    currentActiveImage.removeClass('image-visible').addClass('image-invisible').css('z-index', -10);
    nextActiveImage.addClass('image-visible').removeClass('image-invisible').css('z-index', 20);
    $('.carousel-inner img').not([currentActiveImage, nextActiveImage]).css('z-index', 1)

    e.preventDefault();
  });

  $('.backLink').on('click', function(){
    var currentActiveImage = $('.image-visible');
    var nextActiveImage = currentActiveImage.prev();

    if(nextActiveImage.length == 0)
    {
      nextActiveImage = $('.carousel-inner img').last();
    }

    currentActiveImage.removeClass('image-visible').addClass('image-invisible').css('z-index', -10);
    nextActiveImage.addClass('image-visible').removeClass('image-invisible').css('z-index', 20);
    $('.carousel-inner img').not([currentActiveImage, nextActiveImage]).css('z-index', 1)

    e.preventDefault();

  })

});
