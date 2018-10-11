$(document).ready(function () {
  // Code
  $('.sidenav').sidenav();
  // var modal = $('.modal').modal();
  $('.tabs').tabs();
  $('.dropdown-trigger').dropdown({
    coverTrigger: false,
    constrainWidth: false
  });
  $('.grid').isotope({
    // options
    itemSelector: '.item_filter',
    percentPosition: true,
    fitWidth: true
  });
  $('.bar_filter').click(function () {
    $('.grid').isotope({
      filter: '.bar'
    });
  });
  $('.restaurantes_filter').click(function () {
    $('.grid').isotope({
      filter: '.restaurantes'
    });
  });

  $('.boutiques_filter').click(function () {
    $('.grid').isotope({
      filter: '.boutiques'
    });
  });
  $('.all_filter').click(function () {
    $('.grid').isotope({
      filter: '*'
    });
  }).click();
  $('.all_filter').click();
  $(window).on('load', function () {
    $('.custom_scroll').mCustomScrollbar({
      axis: 'y',
      theme: 'minimal-dark'
    });
  });

  var offsete = $('.slider').offset();
  height = $(window).height() - offsete.top - 5;
  $('.slider').height(height);
  // Slider manual
  var num_slider = $('.slider_container').children('.slider_items').length;
  console.log(num_slider);
  var imgPos = 1;
  for (var aux = 1; aux <= num_slider; aux++) {
    $('.pagination').append('<div class="item_pagination"><i class="material-icons">fiber_manual_record</i></div>');
  }
  $('.slider_container .slider_items').hide();
  $('.slider_container .slider_items:first').show();
  $('.pagination .item_pagination:first').css('color', 'rgba(255, 255, 255, 0.5)');
  $('.pagination .item_pagination').click(pagination);
  $('.next_btn').click(next_slider);
  $('.back_btn').click(back_slider);

  function pagination() {
    var paginationPos = $(this).index() + 1;
    $('.slider_container .slider_items').hide();
    $('.slider_container .slider_items:nth-child(' + paginationPos + ')').fadeIn();
    $('.pagination .item_pagination').css('color', 'rgba(255, 255, 255, 0.3)');
    $(this).css('color', 'rgba(255, 255, 255, 0.5)');
    imgPos = paginationPos;
  }
  var itervalo = null;

  function next_slider() {
    clearInterval(itervalo);
    if (imgPos >= num_slider) {
      imgPos = 1;
    } else {
      imgPos++;
    }
    $('.pagination .item_pagination').css('color', 'rgba(255, 255, 255, 0.3)');
    $('.pagination .item_pagination:nth-child(' + imgPos + ')').css('color', 'rgba(255, 255, 255, 0.5)');
    $('.slider_container .slider_items').hide();
    $('.slider_container .slider_items:nth-child(' + imgPos + ')').fadeIn();
    // itervalo = setInterval(next_slider, 5000);
  }

  function back_slider() {
    clearInterval(itervalo);
    if (imgPos <= 1) {
      imgPos = num_slider;
    } else {
      imgPos--;
    }
    $('.pagination .item_pagination').css('color', 'rgba(255, 255, 255, 0.3)');
    $('.pagination .item_pagination:nth-child(' + imgPos + ')').css('color', 'rgba(255, 255, 255, 0.5)');
    $('.slider_container .slider_items').hide();
    $('.slider_container .slider_items:nth-child(' + imgPos + ')').fadeIn();
    itervalo = setInterval(next_slider, 5000);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////
  $('.modal_reserva').click(function () {
    console.log('hey');
    $('.modal').modal();
    $('.modal').modal('open');
  });
});