import anime from 'animejs'

export function introAnim(logo, navbar, info, title, images) {
	const StartUpTimeline = anime.timeline({
		autoplay: true,
	})

	StartUpTimeline.add(
		{
			targets: logo,
			opacity: [0, '100%'],
			translateY: ['-100%', '0%'],
			easing: 'easeOutCubic',
			duration: 1250,
		},
		750,
	)
		.add(
			{
				targets: navbar,
				opacity: [0, '100%'],
				translateY: ['-100%', '0%'],
				easing: 'easeOutCubic',
				duration: 750,
			},
			750,
		)
		.add(
			{
				targets: info,
				opacity: [0, '100%'],
				translateY: ['100%', '0%'],
				easing: 'easeOutCubic',
				duration: 750,
			},
			750,
		)
		.add(
			{
				targets: title,
				opacity: [0, '100%'],
				translateY: ['100%', '0%'],
				delay: anime.stagger(250),
				easing: 'easeOutCubic',
				duration: 1250,
			},
			1500,
		)
		.add(
			{
				targets: images,
				opacity: [0, '100%'],
				translateX: ['35%', '0%'],
				delay: anime.stagger(100),
				easing: 'easeOutCubic',
				duration: 1250,
			},
			1500,
		)
}

export function fadeIn(el) {
	anime({
		targets: el,
		opacity: [0, 1],
		easing: 'easeInOutCubic',
		duration: 350,
	})
}
