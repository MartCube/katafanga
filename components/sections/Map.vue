<template>
	<section id="location">
		<div class="gmap">
			<iframe loading="lazy" src="https://www.google.com/maps/embed/v1/place?zoom=10&q=place_id:ChIJkUs7X9HN5nERaD-UmmcOhNc&key=AIzaSyDuP85vNlSIT1oXM9v194G-VfA3iI1W1oQ"></iframe>
		</div>
		<div ref="info" class="info">
			<h2>Location</h2>
			<p>There are a number of ways of traveling to the island until our airstrip has been certified by the Fijian government:</p>
			<ul>
				<li>Fly Pacific Sun from Nadi to Vanua Balavu (neighboring island) which takes about 1 hour. Once one arrives at Vanua Balavu you can take a speed boat to Katafanga which takes about 1 hour.</li>
				<li>Charter a small plane and fly from Nadi to Vanua Balavu and once there take the speed boat.</li>
				<li>One can also combine - you can fly Pacific Sun to Vanua Balavu, and have the private plane pick you up for your return at your convenience. Or fly both ways private.</li>
				<li>Sea Plane: From Nadi you could charter a helicopter or a seaplane and fly directly to Katafanga landing on the water. The flight would take about 2 hours.</li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
#location {
	width: 100%;
	display: flex;

	.gmap {
		width: 50%;
		height: 45rem;
		overflow: hidden;

		iframe {
			width: 100%;
			height: 53rem;
			border: 0;
			margin-top: -8rem;
		}
	}

	.info {
		width: 50%;
		height: 45rem;
		padding: 4rem;
		background: $light-grey;
		p {
			max-width: 30rem;
			margin-bottom: 2rem;
		}

		li {
			max-width: 28rem;
			color: $text;
			margin-left: 1rem;
			margin-bottom: 2rem;
		}
	}
}

@media (max-width: 1100px) {
	#location {
		flex-direction: column;
		.gmap {
			width: 100%;
			height: 50vh;
		}
		.info {
			width: 100%;
			height: 100%;
			padding: 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			h2 {
				text-align: center;
			}
		}
	}
}
</style>
