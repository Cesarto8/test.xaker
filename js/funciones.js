(function(){
	//variables globales
	var btn_menu = $('.xk-menu ul.hide-on-med-and-down li a'),
	btn_menu_li = $('.xk-menu ul.hide-on-med-and-down li'),
	btn_menu_slide = $('.side-nav a'),
	tamScrem = $(window).height() - 100;

	$(document).ready(function(){
		btnMenuActive();
		menu();
		btn();
		$(".button-collapse").sideNav();
		$('.modal').modal();
		$('.sidenav').sidenav();
	});
	$(document).scroll(function(){
		menu();
		parallax();
	});

	//funciones

	//funcion_active
	function btnMenuActive(){
		btn_menu_li.children().click(function(e){
			e.preventDefault();
			btn_menu_li.children().removeClass('active');
			$(this).addClass('active');
			switch($(this).attr('data')){
				case 'diy':
				$(this).animate()
				$('#container').load('html/diy.html',function( response, status, xhr ) {
					if ( status == "error" ) {
						var msg = "Sorry but there was an error: ";
						$( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
					}
				});
				break;
				case 'noticias':
				$('#container').removeAttr('style');
				break;
				case 'ocio':
				$('#container').removeAttr('style');
				break;
				case 'codigo':
				$('#container').removeAttr('style');
				break;
			}
		});
	}

	//funcion_menu
	function menu(){
		var scroll_top = $(document).scrollTop();
		if(scroll_top < tamScrem){
			$('nav').removeClass('white').addClass('transparent z-depth-0');
			$('.xk-menu,.xk-menu ul li').children('a').removeClass('black-text').addClass('white-text');
		}else{
			$('nav').removeClass('transparent z-depth-0').addClass('white');
			$('.xk-menu,.xk-menu ul li').children('a').removeClass('white-text').addClass('black-text');
		}
	}

	//funcion parllax
	function parallax(){
		var scroll_top = $(document).scrollTop(),
		pixel = scroll_top / 70;
		$('#parallax').css({
			"-webkit-filter":"blur("+ pixel / 2 +"px)",
			"background-position":"center -" + pixel * 10 + "px"
		});
	}

	//funcion btn
	function btn(){
		btn_menu_li.children().hover(function(){
			switch($(this).attr('data')){
				case 'diy':
				$(this).css({
					'background':'#9b59b6',
					'color':'#fff'
				}).removeClass('black-text');
				break;
				case 'noticias':
				$(this).css({
					'background':'#1abc9c',
					'color':'#fff'
				}).removeClass('black-text');
				break;
				case 'ocio':
				$(this).css({
					'background':'#e74c3c',
					'color':'#fff'
				}).removeClass('black-text');
				break;
				case 'codigo':
				$(this).css({
					'background':'#3498db',
					'color':'#fff'
				}).removeClass('black-text');
				break;
			}
		},function(){
			switch($(this).attr('data')){
				case 'diy':
				$(this).removeAttr('style').addClass('black-text');
				break;
				case 'noticias':
				$(this).removeAttr('style').addClass('black-text');
				break;
				case 'ocio':
				$(this).removeAttr('style').addClass('black-text');
				break;
				case 'codigo':
				$(this).removeAttr('style').addClass('black-text');
				break;
			}
		});
	}
})();
