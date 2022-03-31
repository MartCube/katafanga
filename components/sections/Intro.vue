<template>
	<section class="intro">
		<img src="intro.jpg" alt="katafanga island" />
		<div class="title">
			<h2>paradise found</h2>
			<h1>katafanga island</h1>
			<h3>for sale</h3>
		</div>
		<div class="icons">
			<div class="info">
				<nuxt-img src="/icons/region.svg" />
				<div>
					<h4>region:</h4>
					<p>Fiji, South Pacific</p>
				</div>
			</div>
			<div class="info">
				<nuxt-img src="/icons/location.svg" />
				<div>
					<h4>location:</h4>
					<p>Lau Group in Eastern Fiji</p>
				</div>
			</div>
			<div class="info">
				<nuxt-img src="/icons/size.svg" />
				<div>
					<h4>size:</h4>
					<p>225.00 Acres</p>
				</div>
			</div>
			<div class="info">
				<nuxt-img src="/icons/title.svg" />
				<div>
					<h4>title:</h4>
					<p>Freehold</p>
				</div>
			</div>
			<div class="info">
				<nuxt-img src="/icons/price.svg" />
				<div>
					<h4>price:</h4>
					<p>Upon request</p>
				</div>
			</div>
			<div class="bg"></div>
		</div>
		<div class="grid">
			<CoolLightBox :items="items" :index="index" @close="index = null"> </CoolLightBox>

			<div class="images_wrapper">
				<img v-for="(image, imageIndex) in items" :key="imageIndex" :src="image" @click="index = imageIndex" />
			</div>
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
		items: ['gallery/gallery1.jpg', 'gallery/gallery2.jpg', 'gallery/gallery3.jpg'],
	}),
}
</script>

<style lang="scss" scoped>
.intro {
	width: 100%;
	min-height: 100vh;
	position: relative;
	overflow: hidden;
	img {
		width: 100%;
	}

	.title {
		color: $white;
		position: absolute;
		top: 20%;
		left: 20%;
		h2 {
			margin: 0;
		}
		h1 {
			font-family: 'Lato';
			text-transform: uppercase;
			font-size: 5rem;
			font-weight: 400;
			letter-spacing: 0.5rem;
		}

		h3 {
			font-family: 'Lato';
			font-size: 3rem;
			font-weight: 700;
		}
	}
	.icons {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 8rem;

		display: flex;
		justify-content: center;
		align-items: center;

		.bg {
			position: absolute;
			width: 100%;
			height: 100%;
			background: $white;
			opacity: 0.5;
		}

		img {
			z-index: 2;

			width: 1.5rem;
			height: 1.5rem;
			margin-right: 1rem;
		}

		.info {
			margin-right: 4rem;

			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 2;
			color: $black;
			p {
				color: black;
			}
		}
	}

	.grid {
		width: 100%;
		position: absolute;
		top: 70%;
		left: 50%;
		.images_wrapper {
			height: 100%;
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				width: 22rem;
				margin-right: 0.5rem;
			}
		}
	}
}
</style>
