<template>
	<section id="location">
		<div class="gmap">
			<iframe class="desktop" loading="lazy" src="https://www.google.com/maps/embed/v1/place?zoom=7&q=place_id:ChIJkUs7X9HN5nERaD-UmmcOhNc&key=AIzaSyDuP85vNlSIT1oXM9v194G-VfA3iI1W1oQ"></iframe>
			<iframe class="mobile" loading="lazy" src="https://www.google.com/maps/embed/v1/place?zoom=6&q=place_id:ChIJkUs7X9HN5nERaD-UmmcOhNc&key=AIzaSyDuP85vNlSIT1oXM9v194G-VfA3iI1W1oQ"></iframe>
		</div>
		<div ref="info" class="info">
			<h2>the island</h2>
			<p>Katafanga is located in the exclusive Lau Group in Eastern Fiji. These 57 islands are some of the most sought after due to their privacy, as they are remote and sparsely populated in all of Fiji.</p>
			<h2>the culture</h2>
			<p>Colorful reefs wedge themselves between the ocean and the secluded bays and beaches. Lau islanders are known for their woodcarving and masi (bark cloth) crafts, and have been greatly influenced by neighboring Polynesian cultures.</p>
			<h2>the weather</h2>
			<p>The climate here is drier than most parts of Fiji. Tourism is less developed here than in other parts of Fiji but this is precisely why these islands appeal to many who seek to experience a true island getaway.</p>
			<h2>transportation</h2>
			<p>Katafanga is a one hour flight from the international airport in Nadi, flying over some of the most beautiful scenery in the world, or by yacht, sailing through the most amazing waters.</p>
			<h2>Getting there</h2>
			<p>There are a number of ways of traveling to the island until our airstrip has been certified by the Fijian government:</p>
			<ul>
				<li><span>Fly Commercial + Speed Boat: &nbsp; </span> Sun from Nadi to Vanua Balavu (neighboring island) which takes about 1 hour. Once one arrives at Vanua Balavu you can take a speed boat to Katafanga which takes about 1 hour.</li>
				<li><span>Fly Charter + Speed Boat: &nbsp;</span>A small plane and fly from Nadi to Vanua Balavu and once there take the speed boat.</li>
				<li><span>Fly Commercial + Fly Private: &nbsp;</span> One can also combine - you can fly Pacific Sun to Vanua Balavu, and have the private plane pick you up for your return at your convenience. Or fly both ways private.</li>
				<li><span>Sea Plane: &nbsp;</span>From Nadi you could charter a helicopter or a seaplane and fly directly to Katafanga landing on the water. The flight would take about 2 hours.</li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
#location {
	width: 100%;
	display: flex;
	padding-top: 2rem;
	background: $bg;

	.gmap {
		width: 50%;
		height: 100%;
		overflow: hidden;
		iframe {
			width: 80vw;
			height: calc(1280px + 15rem);
			border: 0;
			margin-top: -15rem;

			&.mobile {
				display: none;
			}
		}
	}

	.info {
		width: 50%;
		// height: 45rem;
		padding: 3rem;
		p {
			max-width: 30rem;
			margin-bottom: 2rem;
			font-size: 0.85rem;
		}

		li {
			max-width: 28rem;
			margin-left: 1rem;
			margin-bottom: 2rem;

			font-size: 0.85rem;
			color: $text;
			&:last-child {
				margin-bottom: 0;
			}
			span {
				font-size: 0.85rem;
				font-weight: bold;
				color: #828282;
			}
		}
	}
}

@media (max-width: 1100px) {
	#location {
		padding-bottom: 0;

		flex-direction: column-reverse;
		.gmap {
			width: 100vw;
			height: 50vh;
			iframe {
				width: 100vw;
				height: 100vh;
				&.mobile {
					display: initial;
				}
				&.desktop {
					display: none;
				}
			}
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
