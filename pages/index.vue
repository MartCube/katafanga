<template>
	<div id="intro" ref="intro">
		<VueSlickCarousel v-bind="settings" ref="bg" class="bg">
			<nuxt-img v-for="(image, imageIndex) in images" :key="imageIndex" :src="image" />
		</VueSlickCarousel>
		<div class="coordinates">17.5167° S, 178.7167° W</div>
		<div ref="links" class="links" :class="{ menu: showMenu }">
			<NuxtLink to="/">home</NuxtLink>
			<NuxtLink to="/about/">about</NuxtLink>
			<NuxtLink to="/location/">location</NuxtLink>
			<NuxtLink to="/gallery/">gallery</NuxtLink>
			<NuxtLink to="/documents/">documents</NuxtLink>
			<NuxtLink to="/contact/">contact</NuxtLink>
		</div>
		<div ref="btn" class="btn" @click="ToggleMenu">
			<nuxt-img v-if="showMenu" class="x" src="/icons/xmark.svg" />
			<nuxt-img v-else src="/icons/bars.svg" />
		</div>
		<div ref="logo" class="logo">
			<h1>katafanga</h1>
			<span>fiji islands</span>
			<h4>katafanga island - fiji freehold - 225 acres</h4>
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
			<div class="wrap region">
				<nuxt-img src="/icons/region.svg" />
				<div class="text">
					<h4>region:</h4>
					<p>Fiji, South Pacific</p>
				</div>
			</div>
			<div class="wrap location">
				<nuxt-img src="/icons/location.svg" />
				<div class="text">
					<h4>location:</h4>
					<p>Lau Group in Eastern Fiji</p>
				</div>
			</div>
			<div class="wrap">
				<nuxt-img src="/icons/size.svg" />
				<div class="text">
					<h4>size:</h4>
					<p>225.00 Acres</p>
				</div>
			</div>
			<div class="wrap">
				<nuxt-img src="/icons/title.svg" />
				<div class="text">
					<h4>title:</h4>
					<p>Freehold</p>
				</div>
			</div>
			<div class="wrap">
				<nuxt-img src="/icons/price.svg" />
				<div class="text">
					<h4>price:</h4>
					<p>Upon request</p>
				</div>
			</div>
			<div class="policy">
				<span>© 2022 The islander Group companies, Ltd, Suva, Fiji</span>
			</div>
			<div class="bg"></div>
		</div>
	</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import { introAnim } from '~/assets/anime'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
	components: {
		VueSlickCarousel,
	},
	layout: 'home',
	data: () => ({
		showMenu: false,
		settings: {
			arrows: false,
			fade: true,
			speed: 750,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			// infinite: true,
		},
		thumbnails_settings: {
			arrows: false,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			swipe: false,
			focusOnSelect: true,
		},
		images: ['intro.jpg', 'gallery/4.jpg', 'gallery/10.jpg'],
	}),
	mounted() {
		const images = document.querySelectorAll('#intro .grid .image')
		const titles = document.querySelectorAll('#intro .titles .box .title')
		introAnim(this.$refs.logo, this.$refs.btn, this.$refs.links, this.$refs.info, titles, images)

		// mobile full height without bar
		const ref = this.$refs.intro
		ref.style.height = window.innerHeight + 'px'
	},
	methods: {
		ToggleMenu() {
			this.showMenu = !this.showMenu
		},
	},
}
</script>

<style lang="scss" scoped>
#intro {
	width: 100%;
	// min-height: -webkit-fill-available;
	position: relative;
	overflow: hidden;

	.coordinates {
		position: absolute;
		top: 0;
		right: 0;
		margin: 2rem;

		color: $white;
		font-size: 0.625rem;
	}
	.btn {
		display: none; // only for mobile

		z-index: 5;

		position: absolute;
		top: 3rem;
		right: 3rem;

		width: 2rem;
		img {
			widows: 2rem;
		}
	}

	.links {
		z-index: 1;
		transform: translateY(-100%); // anime
		position: absolute;
		top: 0;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		a {
			margin: 2rem;

			color: $white;
			text-transform: uppercase;
			text-decoration: none;
			font-family: 'Lato';
			font-size: 0.625rem;

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
			font-size: 1.25rem;
		}
		span {
			font-size: 0.8rem;

			margin-top: 0.5rem;
			font-size: 300;
			font-weight: 300;
		}
		h4 {
			margin-top: 0.5rem;

			font-size: 0.6rem;

			font-weight: 400;
			letter-spacing: 0;
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

		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		.bg {
			position: absolute;
			width: 100%;
			height: 100%;
			background: $white;
			opacity: 0.5;
		}

		.wrap {
			margin: 1rem 1rem 1rem 3rem;

			display: flex;
			justify-content: space-between;
			align-items: center;
			z-index: 2;
			color: $black;
			img {
				z-index: 2;

				width: 1.5rem;
				height: 1.5rem;
				margin-right: 1rem;
			}

			.text {
				h4 {
					text-transform: capitalize;
				}
				p {
					font-size: 0.8rem;
					color: black;
				}
			}
		}

		.policy {
			width: 100vw;
			height: 3rem;

			background: $white;
			display: flex;
			justify-content: center;
			align-items: center;

			font-family: 'Lato';
			font-size: 0.8rem;
			line-height: 1.5rem;
			color: $black;
		}
	}
}
@media (max-width: 1100px) {
	#intro {
		flex-direction: column;
		padding: 0;
		min-height: initial;
		.coordinates {
			display: none;
		}

		.titles {
			top: 25%;
			left: 2rem;
			.box {
				h1 {
					font-size: 2.5rem;
				}
				h3 {
					font-size: 2rem;
				}
			}
		}
		.links {
			display: none;
			&.menu {
				position: absolute;
				z-index: 2;
				width: 100%;
				height: 100%;
				background: $white;
				overflow: hidden;

				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				a {
					font-size: 1rem;
					margin: 0;
					color: $black;
				}
			}
		}
		.btn {
			display: initial;
			img {
				width: 32px;
				height: 32px;
			}
		}
		.logo {
			width: max-content;
		}
		.info {
			justify-content: space-between;
			padding-top: 1rem;
			.wrap {
				padding: 0.5rem;
				margin: 0;
				width: fit-content;
				display: flex;
				justify-items: center;
				justify-content: center;

				.text {
					h4 {
						font-size: 0.75rem;
					}
					p {
						font-size: 0.625rem;
					}
				}
			}
		}
	}
}
@media (max-width: 600px) {
	#intro {
		.info {
			.wrap {
				img {
					margin-right: 0.5rem;
				}
				&.region {
					width: 45%;
					// justify-content: space-between;
				}
				&.location {
					width: 55%;
					// justify-content: space-between;
				}
			}
		}
	}
}
</style>
