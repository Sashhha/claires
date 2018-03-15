(function($) {
			var nav = $('.navmenu');
			var cont = nav.find('.content');
			var mnu = $('.main-nav');
			var resizer;

			function mob_nav(nav, mnu) {
				mnu = mnu.detach();
				if ($(window).width() <= 650) {
					$('body').append(mnu);
				} else {
					cont.after(mnu);
				}
			};

			mob_nav(nav, mnu);

			$('#toggler').on('click', function(e) {
				e.preventDefault();
				$(this).toggleClass('open');
				$('.main-nav').toggleClass('open');
			});

			$(window).on('resize', function() {
				clearTimeout(resizer);

				resizer = setTimeout(function() {
					mob_nav(nav, mnu);
				}, 150)
			});

})(jQuery)
