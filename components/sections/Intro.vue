<template>
	<section class="intro">
		<Navbar />
		<div class="logo lazyload">
			<h1>katafanga</h1>
			<span>fiji islands</span>
		</div>
		<!-- <nuxt-img :src="bg" class="bg" /> -->
		<img :src="bg" class="bg lazyload" />

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
			<div class="images_wrapper">
				<img v-for="(image, imageIndex) in images" :key="imageIndex" :src="image" @click="changeBG(image)" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data: () => ({
		bg: 'test/test2.jpg',
		images: ['test/test2.jpg', 'test/test1.jpg', 'test/test3.jpg'],
	}),
	methods: {
		changeBG(value) {
			this.bg = value
		},
	},
}
</script>

<style lang="scss" scoped>
.intro {
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
	.bg {
		width: inherit;
		height: inherit;
		object-fit: cover;
		object-position: center;

		&.lazyload,
		&.lazyloading {
			opacity: 0;
		}
		&.lazyloaded {
			opacity: 1;
			transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}

	.logo {
		position: absolute;
		top: 0;
		left: 0;
		margin: 2rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		color: $white;
		text-transform: uppercase;
		letter-spacing: 0.5rem;
		h1 {
			font-size: 2rem;
		}
		span {
			margin-top: 0.5rem;
			font-size: 300;
		}
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
			margin: 1rem 0;
			font-family: 'Lato';
			text-transform: uppercase;
			font-size: 5rem;
			font-weight: 300;
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
				margin-left: 1rem;

				width: 20rem;
				height: 12rem;
				object-fit: cover;
			}
		}
	}
}
</style>
