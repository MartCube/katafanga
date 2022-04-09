<template>
	<section id="gallery">
		<div class="grid">
			<CoolLightBox :items="items" :index="index" @close="index = null"> </CoolLightBox>

			<VueSlickCarousel v-bind="settings" ref="carousel">
				<div v-for="(image, imageIndex) in items" :key="imageIndex" class="image">
					<nuxt-img :src="image" />
					<nuxt-img class="plus" src="/icons/plus.svg" @click="index = imageIndex" />
				</div>
			</VueSlickCarousel>

			<div class="arrows">
				<nuxt-img class="prev" src="/icons/arrow.svg" @click="showNext" />
				<h2>Gallery</h2>
				<nuxt-img class="next" src="/icons/arrow.svg" @click="showNext" />
			</div>
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
			lazyLoad: 'ondemand',
			arrows: false,
			dots: false,
			infinite: true,
			speed: 750,
			slidesToShow: 3,
			slidesToScroll: 2,
			// autoplay: true,
		},
		index: null,
		items: ['gallery/3.jpg', 'gallery/4.jpg', 'gallery/5.jpg', 'gallery/1.jpg', 'gallery/2.jpg', 'intro/1.jpg'],
	}),
	methods: {
		showNext() {
			this.$refs.carousel.next()
		},
	},
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
					// padding-left: 1rem;
					display: flex;
					position: relative;

					&::before {
						z-index: 1;
						content: '';
						position: absolute;
						top: 0;
						// width: calc(100% - 1rem);
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

		.arrows {
			display: flex;
			justify-content: center;
			align-items: center;

			h2 {
				margin: 2rem;
			}
			.prev {
				width: 1.5rem;
				transition: all 0.35s ease;
				transform: rotate(-180deg);

				&:hover {
					cursor: pointer;
					transform: rotate(-180deg) scale(1.2);
				}
			}
			.next {
				width: 1.5rem;
				transition: all 0.35s ease;

				&:hover {
					cursor: pointer;
					transform: scale(1.2);
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

@media (max-width: 800px) {
	#gallery {
		flex-direction: column;
		padding: 0;
		.grid {
			width: 100%;

			.slick-list .slick-slide .image {
				width: 30%;
				height: 10rem;
			}
		}
		.info {
			width: 100%;
			padding: 4rem 2rem;
			h2 {
				text-align: center;
			}
			p {
				max-width: 30rem;
			}
		}
	}
}
</style>
