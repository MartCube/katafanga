<template>
	<div class="navbar">
		<NuxtLink ref="logo" class="logo" to="/">
			<h1>katafanga</h1>
			<span>fiji islands</span>
			<h4>katafanga island - fiji freehold - 225 acres</h4>
		</NuxtLink>
		<div class="links" :class="{ menu: showMenu }" @click="CloseMenu">
			<NuxtLink to="/">home</NuxtLink>
			<NuxtLink to="/about/">about</NuxtLink>
			<NuxtLink to="/location/">location</NuxtLink>
			<NuxtLink to="/gallery/">gallery</NuxtLink>
			<NuxtLink to="/documents/">documents</NuxtLink>
			<NuxtLink to="/contact/">contact</NuxtLink>
		</div>
		<div class="coordinates">17.5167° S, 178.7167° W</div>
		<div class="btn" @click="ToggleMenu">
			<nuxt-img v-if="showMenu" class="x" src="/icons/xmark.svg" />
			<nuxt-img v-else src="/icons/bars.svg" />
		</div>
		<h1 class="route">{{ routeTitle }}</h1>
		<nuxt-img src="/intro.jpg" class="lazyload" />
	</div>
</template>

<script>
export default {
	data: () => ({
		showMenu: false,
	}),
	computed: {
		routeTitle() {
			const title = this.$route.name
			if (title === 'contact') return ''
			else return title
		},
	},
	methods: {
		ToggleMenu() {
			this.showMenu = !this.showMenu
		},
		CloseMenu() {
			this.showMenu = false
		},
	},
}
</script>

<style lang="scss" scoped>
.navbar {
	width: 100%;
	height: 40vh;
	position: relative;
	img {
		z-index: 1;

		width: inherit;
		height: inherit;
		object-fit: cover;
		object-position: center;
	}
	.coordinates {
		position: absolute;
		top: 0;
		right: 0;
		margin: 2rem;

		color: $white;
		font-size: 0.625rem;
	}
	.route {
		z-index: 2;
		position: absolute;
		bottom: 30%;
		width: 100%;
		text-align: center;

		color: $white;
		text-transform: uppercase;
		text-decoration: none;
		font-family: 'Lato';
		font-size: 3rem;
		font-weight: 300;
		line-height: 3rem;
		letter-spacing: 0.2rem;
	}
	.links {
		z-index: 2;
		position: absolute;
		top: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		a {
			margin: 2.5rem 2rem;

			color: $white;
			text-transform: uppercase;
			text-decoration: none;
			font-family: 'Lato';
			font-size: 0.625rem;
			font-weight: 400;
			line-height: 1rem;

			&:hover {
				transition: all 0.2s ease;
				cursor: pointer;
				opacity: 0.75;
			}
		}
	}
	.logo {
		z-index: 3;

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
		text-decoration: none;
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
			font-size: 0.625rem;

			font-weight: 400;
			letter-spacing: 0;
		}
	}
	.btn {
		display: none; // only for mobile

		z-index: 5;
		position: absolute;
		top: 3rem;
		right: 3rem;

		width: 2rem;
	}
}

@media (max-width: 1200px) {
	.navbar {
		.coordinates {
			display: none;
		}
		.route {
			font-size: 3rem;
		}
		.links {
			width: 100%;
			display: none;
			position: fixed;

			&.menu {
				z-index: 5;
				width: 100%;
				height: 100vh;
				background: $white;
				overflow: hidden;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;
				a {
					font-size: 1rem;
					margin: 0;
					color: $black;
				}
			}
		}
		.btn {
			display: initial;
			.x {
				position: fixed;
			}
		}
	}
}

@media (max-width: 700px) {
	.navbar {
		.route {
			font-size: 2rem;
		}
	}
}
</style>
