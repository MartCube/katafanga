<template>
	<section id="location">
		<div class="gmap">
			<iframe loading="lazy" src="https://www.google.com/maps/embed/v1/place?zoom=10&q=place_id:ChIJkUs7X9HN5nERaD-UmmcOhNc&key=AIzaSyDuP85vNlSIT1oXM9v194G-VfA3iI1W1oQ"></iframe>
		</div>
		<div class="info">
			<h2>Location</h2>
			<p>There are number of ways of traveling to the island. Katafanga is one-hour flight from the international airport in Nadi, flying over someof the most beautiful scenenry in the world, or by yacht, sailing trough the most amazing waters.</p>
			<p><span>Fly Commerical + Speed Boat:</span> Sun from Nadi to Vanua Balavu (neighboring island) which takes about one hour. Once one arrives at Vanua Balavu you can take a speed boat to Katafanga which takes about one hour.</p>
			<p><span> Fly Charter + Speed Boat:</span> a small plane can fly from Nadi to Vanua Balavu and once there take the speed boat.</p>
			<p><span>Fly Commercial + Fly Private:</span> One can also combine - you can fly Pacific sn to Vanua Balavu and you have the private plane pick you up for your return at your convenience. Or fly both ways private.</p>
			<p><span> Sea Plane:</span> From Nadi you could charter a helicopter or a seaplane and fly directly to katafanga landing on the water. The flight would take about two hours.</p>
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

		p {
			max-width: 30rem;
			margin-bottom: 2rem;

			span {
				color: $black;
				font-weight: 700;
			}
		}
	}
}

@media (max-width: 800px) {
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

			h2 {
				text-align: center;
			}
		}
	}
}
</style>
