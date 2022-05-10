<template>
	<section id="gallery">
		<div class="grid">
			<CoolLightBox :items="items" :index="index" @close="index = null"> </CoolLightBox>

			<nuxt-img v-for="(item, i) in items" :key="i" :src="item" class="lazyload" @click="index = i" />
		</div>
	</section>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
	components: {
		CoolLightBox,
	},
	data: () => ({
		index: null,
		items: ['/gallery/1.jpg', '/gallery/2.jpg', '/gallery/3.jpg', '/gallery/4.jpg', '/gallery/5.jpg', '/gallery/6.jpg', '/gallery/7.jpg', '/gallery/8.jpg', '/gallery/1.jpg', '/gallery/9.jpg', '/gallery/11.jpg', '/gallery/12.jpg'],
	}),
}
</script>

<style lang="scss" scoped>
#gallery {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 6rem 0;
	background: $light-grey;

	.grid {
		width: 100%;
		max-width: 100rem;
		display: flex;
		flex-wrap: wrap;

		img {
			width: 20%;
			margin: 2.5%;
			transition: all 0.2s ease;
			&:hover {
				cursor: pointer;
				filter: brightness(50%);
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
			img {
				width: 40%;
				margin: 5%;
			}
		}
	}
}
</style>
