history.scrollRestoration = "manual"

var modal = false

$(() => {
	var flag = true
	var desc = $('.desc').position().top - 300
	var highlights = $('.highlights').position().top - 300
	var map = $('.map').position().top - 300

	$('.hero img').addClass('pop-up')

	$(this).delay(1000).queue(() => {
		$('.hero img').css('top', '.5rem').removeClass('pop-up')
	})

	$('.rsvp-btn').click(() => {
		$('.wrapper').css('display', 'flex').animate({
			opacity: 1
		}, 300, () => {
			modal = true
		})
	})

	$(document).click((e) => {
		if (!$(e.target).closest('.modal').length) {
			closeModal()
		}
	})

	$('.send').click(() => {
		closeModal()
	})

	$('.close').click(() => {
		closeModal()
	})

	$(window).scroll(() => {
		var pos = $(window).scrollTop()

		// Displays sections
		switch (flag) {
			case pos > desc && pos < highlights:
				$('.desc .container').animate({
					'opacity': 1
				}, 300)
				break
			case pos > highlights && pos < map:
				$('.highlights h2').animate({
					'opacity': 1
				}, 300)
				$('.highlights .container').animate({
					'opacity': 1
				}, 300)
				$('.highlight:eq(0)').addClass('highlight-up')
				setTimeout(() => {
					$('.highlight:eq(1)').addClass('highlight-up')
				}, 100)
				setTimeout(() => {
					$('.highlight:eq(2)').addClass('highlight-up')
				}, 200)
				setTimeout(() => {
					$('.highlight:eq(3)').addClass('highlight-up')
				}, 300)
				break
			case pos > map:
				if ($('.map .container').css('opacity') == 0) {
					$('.map h2').animate({
						'opacity': 1
					}, 300)
					$('.map .container').animate({
						'opacity': 1
					}, 300)
					$('.info span').css('width', '12rem')
				}
				flag = false
		}

		if (pos > desc - 100)
			$('.navbar').css({
				backgroundColor: 'rgba(0,0,0,.5)'
			})
		else
			$('.navbar').css({
				background: 'none'
			})
	})
})

var closeModal = () => {
	console.log(modal)
	if (modal)
		$('.wrapper').animate({
			opacity: 0
		}, 300, () => {
			$('.wrapper').css('display', 'none')
			$('#input').val('')
			modal = false
		})
}