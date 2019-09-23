history.scrollRestoration = "manual"

$(document).ready(() => {
	var flag = true
	var desc = $('.desc').position().top - 300
	var highlights = $('.highlights').position().top - 300
	var map = $('.map').position().top - 300

	$('.hero img').addClass('pop-up')

	$(this).delay(2000).queue(() => {
		$('.hero img').css('top', '1rem').removeClass('pop-up')
	})

	$(window).scroll(() => {
		var pos = $(window).scrollTop()

		// Displays sections
		switch (flag) {
			case pos > desc && pos < highlights:
				$('.desc .container').animate({
					'opacity': 1
				}, 500)
				break
			case pos > highlights && pos < map:
				$('.highlights h2').animate({
					'opacity': 1
				})
				$('.highlights .container').animate({
					'opacity': 1
				}, 500)
				break
			case pos > map:
				$('.map h2').animate({
					'opacity': 1
				})
				$('.map .container').animate({
					'opacity': 1
				}, 500)
				flag = false
		}

		if (pos > desc)
			$('.navbar').css({
				backgroundColor: 'rgba(0,0,0,.5)'
			})
		else
			$('.navbar').css({
				background: 'none'
			})
	})
})