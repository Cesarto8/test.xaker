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
  // init
  slider('.slider', 'yes', '5000');
  slider('.slider_2', 'no', '0');

  function slider(selector, auto, time) {
    var modulo = $(selector + ' .slider_container')[0].children;
    var num_slider = modulo.length;
    var imgPos = 1;
    for (var aux = 1; aux <= num_slider; aux++) {
      $(selector + ' .pagination').append('<div class="item_pagination"><i class="material-icons">fiber_manual_record</i></div>');
    }
    $(selector + ' .slider_container .slider_items').hide();
    $(selector + ' .slider_container .slider_items:first').show();
    $(selector + ' .pagination .item_pagination:first').css('color', 'rgba(255, 255, 255, 0.5)');
    $(selector + ' .pagination .item_pagination').click(pagination);
    $(selector + ' .next_btn').click(next_slider);
    $(selector + ' .back_btn').click(back_slider);

    function pagination() {
      var paginationPos = $(this).index() + 1;
      $(selector + ' .slider_container .slider_items').hide();
      $(selector + ' .slider_container .slider_items:nth-child(' + paginationPos + ')').fadeIn();
      $(selector + ' .pagination .item_pagination').css('color', 'rgba(255, 255, 255, 0.3)');
      $(this).css('color', 'rgba(255, 255, 255, 0.5)');
      imgPos = paginationPos;
    }
    var itervalo = null;
    if (auto == 'yes') {
      itervalo = setInterval(next_slider, time);
    }

    function next_slider() {
      clearInterval(itervalo);
      if (imgPos >= num_slider) {
        imgPos = 1;
      } else {
        imgPos++;
      }
      $(selector + ' .pagination .item_pagination').css('color', 'rgba(255, 255, 255, 0.3)');
      $(selector + ' .pagination .item_pagination:nth-child(' + imgPos + ')').css('color', 'rgba(255, 255, 255, 0.5)');
      $(selector + ' .slider_container .slider_items').hide();
      $(selector + ' .slider_container .slider_items:nth-child(' + imgPos + ')').fadeIn();
      if (auto == 'yes') {
        itervalo = setInterval(next_slider, time);
      }
    }

    function back_slider() {
      clearInterval(itervalo);
      if (imgPos <= 1) {
        imgPos = num_slider;
      } else {
        imgPos--;
      }
      $(selector + ' .pagination .item_pagination').css('color', 'rgba(255, 255, 255, 0.3)');
      $(selector + ' .pagination .item_pagination:nth-child(' + imgPos + ')').css('color', 'rgba(255, 255, 255, 0.5)');
      $(selector + ' .slider_container .slider_items').hide();
      $(selector + ' .slider_container .slider_items:nth-child(' + imgPos + ')').fadeIn();
      itervalo = setInterval(next_slider, 5000);
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////////////
  $('.modal_reserva').click(function () {
    console.log('hey');
    $('.modal').modal();
    $('.modal').modal('open');
  });
});