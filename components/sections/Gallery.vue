<template>
	<section id="gallery">
		<div class="grid">
			<CoolLightBox :items="items" :index="index" @close="index = null"> </CoolLightBox>

			<VueSlickCarousel v-bind="settings" ref="carousel" class="gallery">
				<div v-for="(image, imageIndex) in items" :key="imageIndex" class="image">
					<nuxt-img :src="image" />
					<nuxt-img class="plus" src="/icons/plus.svg" @click="index = imageIndex" />
					<nuxt-img class="prev" src="/icons/arrow.svg" @click="showNext" />
					<nuxt-img class="next" src="/icons/arrow.svg" @click="showNext" />
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
			lazyLoad: 'ondemand',
			arrows: false,
			dots: false,
			speed: 750,
			slidesToShow: 2,
			slidesToScroll: 1,
			centerMode: true,
			rows: 1,
			responsive: [
				{
					breakpoint: 650,
					settings: {
						slidesToShow: 1,
					},
				},
			],
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
		}
		.info {
			width: 100%;
			padding: 4rem 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
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
