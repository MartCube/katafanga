<template>
	<section id="about">
		<div ref="info" class="info">
			<h2>paradise found</h2>
			<p>This sprawling 225-acre island of unspoiled beauty, laced by swaying coconut palm trees and natural habitat, is 1 mile long by 1/3 mile wide with 150-foot elevations. The impressive coral reef, which encompasses a pristine blue lagoon, magically has a natural opening of 200 feet wide, thus allowing for luxury yachts over 200 feet to enter and dock, and have the serene protection of the lagoon.</p>
		</div>
		<img src="/about.jpg" alt="about" />
	</section>
</template>

<script>
import { fadeIn } from '~/assets/anime'

export default {
	mounted() {
		fadeIn(this.$refs.info)
	},
}
</script>

<style lang="scss" scoped>
#about {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 6rem 0;

	img {
		width: 100%;
		max-width: 33rem;
	}

	.info {
		opacity: 0; // anime
		width: 25rem;
		margin-right: 8rem;
	}
}

@media (max-width: 800px) {
	#about {
		flex-direction: column-reverse;
		padding: 4rem 5%;
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
