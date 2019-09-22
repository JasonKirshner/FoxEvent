history.scrollRestoration = "manual"

$(document).ready(() => {
	var flag = true
	var desc = $('.top').position().top - 200
	var highlights = $('.highlights').position().top - 300
	var map = $('.map').position().top - 300

	console.log(highlights)

	$(window).scroll(() => {
		var pos = $(window).scrollTop()
		switch (flag) {
			case pos > desc && pos < highlights:
				$('.top .container').animate({
					'opacity': 1
				}, 400)
				break
			case pos > highlights && pos < map:
				$('.highlights .container').animate({
					'opacity': 1
				}, 400)
				break
			case pos > map:
				$('.map .container').animate({
					'opacity': 1
				}, 400)
				flag = false
		}
	})
})