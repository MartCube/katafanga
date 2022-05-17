<template>
	<div class="page about">
		<div class="image">
			<div class="text">
				<h2>paradise found</h2>
				<p>Katafanga (pronounced cat'-a-fun-ga) is a Tongan word that means smiling beach. The island is located in Fiji's remote Northern Lau Group and it was once owned by Harold Gatty, the Australian aviator who founded Fiji Airways in 1951, which later became Air Pacific. In May 2012, the airline announced that it would reintroduce the name Fiji Airways to reinforce its role as the proud national airline of Fiji.</p>
				<p>The entrance to the lagoon is 35 feet deep and has a natural opening of 200 feet wide, thus allowing for luxury yachts over 200 feet to enter, dock and have the serene protection of the lagoon. The island is 1 mile long by 1/3 mile wide with 150 foot elevations.</p>
			</div>
			<nuxt-img src="/about.jpg" alt="about" />
		</div>
		<div class="info">
			<p>A magnificent 225 acre island fringed with sugar white sand beaches and laced by swaying coconut palm trees in a natural tropical habitat. The Island, also known as the Blue Lagoon, is encircled by a natural coral reef, thus creating a 5,000 acre magical blue lagoon. The dolphins and sea turtles come into the crystal clear blue lagoon to have their offspring. Colorful tropical fish, coral, and the almost extinct turquoise colored clams call this home. The lagoon is so clear that one can farm rare black pearl oysters - only a few places in the world have this quality of water.</p>
			<p>The island's limestone has created several caves and tide pools that are perfect for exploring. The nine caves on the island are truly amazing with large caverns, corridors of stalagmites and stalactites ideal for exploration and spelunking. The deepest explored part of the caves are 400 feet below the surface. The island is covered with coconut palm trees creating the ultimate tropical ambiance. The villa development was strategically placed on the western side to take advantage of the magnificent South Pacific sunsets.</p>
			<p>Katafanga Island is a freehold titled property, truly scarce in Fiji thus ensuring its long term investment potential. Freehold land accounts for approximately 7% of all land in Fiji, however many freehold islands have a village located on them. There are only a handful of freehold islands in the country that don't have villages on them and represent a true "private island" experience. Fiji freehold real estate has no property taxes. Easier to sell and finance residential lots or villas.</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.about {
	background: $bg;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 6rem 0;

	p {
		margin-bottom: 1.5rem;
		font-size: 0.85rem;
	}

	.image {
		width: 100%;
		max-width: 62rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.text {
			width: 100%;

			max-width: 30rem;
		}
		img {
			width: 100%;
			max-width: 30rem;
		}
	}

	.info {
		max-width: 62rem;
	}
}

@media (max-width: 800px) {
	.about {
		flex-direction: column;
		padding: 4rem 5%;

		.image {
			width: 90%;

			flex-direction: column;
		}
		.info {
			width: 90%;
			margin: 2rem 0;
			h2 {
				text-align: center;
			}
		}
	}
}
</style>
