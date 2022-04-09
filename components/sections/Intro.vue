<template>
	<section id="intro">
		<nuxt-img :src="bg" class="bg lazyload" />

		<div ref="navbar" class="navbar">
			<span v-scroll-to="'#home'">home</span>
			<span v-scroll-to="'#about'">about</span>
			<span v-scroll-to="'#gallery'">gallery</span>
			<span v-scroll-to="'#contact'">contact</span>
		</div>
		<div ref="logo" class="logo">
			<h1>katafanga</h1>
			<span>fiji islands</span>
			<h4>for sale</h4>
		</div>
		<div class="titles">
			<div class="box">
				<h2 class="title">paradise found</h2>
			</div>
			<div class="box">
				<h1 class="title">katafanga island</h1>
			</div>
			<div class="box">
				<h3 class="title">for sale</h3>
			</div>
		</div>
		<div ref="info" class="info">
			<div class="wrap">
				<nuxt-img src="/icons/region.svg" />
				<div>
					<h4>region:</h4>
					<p>Fiji, South Pacific</p>
				</div>
			</div>
			<div class="wrap">
				<nuxt-img src="/icons/location.svg" />
				<div>
					<h4>location:</h4>
					<p>Lau Group in Eastern Fiji</p>
				</div>
			</div>
			<div class="wrap">
				<nuxt-img src="/icons/size.svg" />
				<div>
					<h4>size:</h4>
					<p>225.00 Acres</p>
				</div>
			</div>
			<div class="wrap">
				<nuxt-img src="/icons/title.svg" />
				<div>
					<h4>title:</h4>
					<p>Freehold</p>
				</div>
			</div>
			<div class="wrap">
				<nuxt-img src="/icons/price.svg" />
				<div>
					<h4>price:</h4>
					<p>Upon request</p>
				</div>
			</div>
			<div class="bg"></div>
		</div>
		<div class="grid">
			<div v-for="(image, imageIndex) in thumbnails" :key="imageIndex" class="image" @click="changeBG(image)">
				<nuxt-img :src="image" class="lazyload" />
			</div>
		</div>
	</section>
</template>

<script>
import { introAnim } from '~/assets/anime'
export default {
	data: () => ({
		index: 3,
		bg: 'intro/3.jpg',
		thumbnails: ['intro/3-thumbnail.jpg', 'intro/2-thumbnail.jpg', 'intro/1-thumbnail.jpg'],
		images: ['intro/3.jpg', 'intro/2.jpg', 'intro/1.jpg'],
		polling: null,
	}),
	mounted() {
		const images = document.querySelectorAll('#intro .grid .image')
		const titles = document.querySelectorAll('#intro .titles .box .title')
		introAnim(this.$refs.logo, this.$refs.navbar, this.$refs.info, titles, images)

		this.intervalBG()
	},
	methods: {
		changeBG(value) {
			this.bg = value.replace('-thumbnail', '')
		},
		intervalBG() {
			const self = this
			setInterval(function () {
				self.index--
				if (self.index === 0) self.index = 3
				self.bg = `intro/${self.index.toString()}.jpg`
			}, 5000)
		},
	},
}
</script>

<style lang="scss" scoped>
#intro {
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;

	.bg {
		z-index: -1;
		user-select: none;
		width: inherit;
		height: inherit;
		object-fit: cover;
		object-position: center;
	}
	.navbar {
		z-index: 1;
		transform: translateY(-100%); // anime
		position: absolute;
		top: 0;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		span {
			margin: 2rem;

			color: $white;
			text-transform: uppercase;
			font-family: 'Lato';
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5rem;

			&:hover {
				transition: all 0.2s ease;
				cursor: pointer;
				opacity: 0.75;
			}
		}
	}

	.logo {
		z-index: 1;
		transform: translateY(-100%); // anime

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
		h4 {
			margin-top: 1rem;
			letter-spacing: 0.25rem;
		}
		span {
			margin-top: 0.5rem;
			font-size: 300;
		}
	}
	.titles {
		z-index: 1;

		user-select: none;

		color: $white;
		position: absolute;
		top: 20%;
		left: 20%;
		.box {
			overflow: hidden;
			.title {
				opacity: 0; //anime
			}
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
	}
	.info {
		z-index: 1;
		transform: translateY(100%); // anime

		user-select: none;
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

		.wrap {
			margin-right: 4rem;

			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 2;
			color: $black;
			img {
				z-index: 2;

				width: 1.5rem;
				height: 1.5rem;
				margin-right: 1rem;
			}
			p {
				color: black;
			}
		}
	}
	.grid {
		width: 100%;
		position: absolute;
		bottom: 10rem;

		display: flex;
		justify-content: flex-end;

		.image {
			opacity: 0; // anime
			width: 18rem;
			height: 10rem;
			display: flex;
			position: relative;
			margin-right: 2rem;

			&::before {
				content: '';
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
				background: $black;
				opacity: 0;
			}
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			&:hover {
				cursor: pointer;
				&::before {
					transition: all 0.35s ease;
					opacity: 0.35;
				}
			}
		}
	}
}
@media (max-width: 1100px) {
	#intro {
		flex-direction: column;
		padding: 0;

		.grid,
		.titles {
			display: none;
		}
		.navbar {
			justify-content: space-evenly;
			span {
				margin: 2rem 0;
			}
		}

		.logo {
			width: 100%;
			margin: 25vh auto 0;
		}

		.info {
			height: fit-content;
			flex-wrap: wrap;
			justify-content: space-between;

			.wrap {
				padding: 1rem;
				width: 50%;
				margin: 0;
				justify-content: flex-start;
				&:nth-child(5) {
					display: none;
				}
			}
		}
	}
}
</style>
