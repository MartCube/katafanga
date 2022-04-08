<template>
	<section id="gallery">
		<div class="grid">
			<CoolLightBox :items="items" :index="index" @close="index = null"> </CoolLightBox>

			<VueSlickCarousel v-bind="settings">
				<div v-for="(image, imageIndex) in items" :key="imageIndex" class="image">
					<nuxt-img :src="image" />
					<nuxt-img class="plus" src="/icons/plus.svg" @click="index = imageIndex" />
				</div>
			</VueSlickCarousel>
		</div>
		<div class="info">
			<h2>explore the island</h2>
			<p>Katafanga is located in the exclusive Lau Group in Eastern Fiji. These 57 islands are some of the most sought after due to their privacy, as they are remote and sparsely populated in all of Fiji. Colorful reefs wedge themselves between the ocean and the secluded bays and beaches.</p>
			<p>The climate here is drier than most parts of Fiji. Tourism is less developed here than in other parts of Fiji but this is precisely why these islands appeal to many who seek to experience a true island getaway. Katafanga is a one-hour flight from the international airport in Nadi, flying over some of the most beautiful scenery in the world, or by yacht, sailing through the most amazing waters. A huge amount of work has been done on this island.</p>
		</div>
	</section>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
	components: {
		CoolLightBox,
		VueSlickCarousel,
	},
	data: () => ({
		settings: {
			arrows: false,
			dots: false,
			// focusOnSelect: true,
			infinite: true,
			speed: 750,
			// centerMode: true,
			centerPadding: '50px',
			slidesToShow: 3,
			slidesToScroll: 2,
			// variableWidth: true,
			autoplay: true,
		},
		index: null,
		items: ['gallery/3.jpg', 'gallery/4.jpg', 'gallery/5.jpg', 'gallery/1.jpg', 'gallery/2.jpg', 'intro/1.jpg'],
	}),
}
</script>

<style lang="scss" scoped>
#gallery {
	width: 100%;
	display: flex;
	padding: 6rem 0;
	background: $light-grey;

	.grid {
		width: 50%;
		height: 100%;
		margin: auto 0;

		.slick-list {
			.slick-slide {
				.image {
					width: 30%;
					height: 18rem;
					// padding-right: 1rem;
					display: flex;
					position: relative;

					&::before {
						z-index: 1;
						content: '';
						position: absolute;
						top: 0;
						width: 100%;
						height: 100%;

						background: $black;
						opacity: 0;
					}
					img {
						z-index: 0;
						width: 100%;
						height: 100%;
						object-fit: cover;
					}

					&:hover {
						cursor: pointer;

						.plus {
							opacity: 0.25;
						}

						&::before {
							transition: all 0.35s ease;
							opacity: 0.35;
						}
					}
					.plus {
						opacity: 0;
						z-index: 2;

						position: absolute;
						top: calc(50% - 2rem);
						left: calc(50% - 2rem);
						width: 4rem;
						height: 4rem;
						padding: 1rem;
						border: 2px solid $white;
						border-radius: 50%;
						transition: all 0.35s ease;

						&:hover {
							opacity: 1;
						}
					}
				}
			}
		}
	}

	.info {
		width: fit-content;
		padding: 4rem;
		background: $dark-grey;

		p {
			max-width: 25rem;
			margin-bottom: 2rem;
			&:last-child {
				margin: 0;
			}
			span {
				color: $black;
				font-weight: 700;
			}
		}
	}
}
</style>
