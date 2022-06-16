<template>
	<section id="gallery">
		<div id="lightgallery" class="grid">
			<a v-for="(item, i) in items" :key="i" :href="item">
				<nuxt-img :src="item" class="lazyload" />
			</a>

			<a v-for="(item, i) in moreItems" v-show="show" :key="i" :href="item">
				<nuxt-img :src="item" class="lazyload" />
			</a>
		</div>
		<button v-if="!show" @click="show = true">view more</button>
	</section>
</template>

<script>
export default {
	data: () => ({
		show: false,
		index: null,
		items: ['/gallery/1.jpg', '/gallery/2.jpg', '/gallery/3.jpg', '/gallery/4.jpg', '/gallery/5.jpg', '/gallery/6.jpg', '/gallery/7.jpg', '/gallery/8.jpg'],
		moreItems: ['/gallery/9.jpg', '/gallery/10.jpg', '/gallery/11.jpg', '/gallery/12.jpg'],
		allItems: ['/gallery/1.jpg', '/gallery/2.jpg', '/gallery/3.jpg', '/gallery/4.jpg', '/gallery/5.jpg', '/gallery/6.jpg', '/gallery/7.jpg', '/gallery/8.jpg', '/gallery/9.jpg', '/gallery/10.jpg', '/gallery/11.jpg', '/gallery/12.jpg'],
	}),
	mounted() {
		const el = document.getElementById('lightgallery')
		window.lightGallery(el, { download: false })
	},
}
</script>

<style lang="scss" scoped>
#gallery {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem 0;
	background: $light-grey;

	.grid {
		width: 100%;
		max-width: 100rem;
		display: flex;
		flex-wrap: wrap;

		a {
			max-width: 300px;
			margin: 2.5%;

			img {
				width: 100%;
				transition: all 0.2s ease;
				&:hover {
					cursor: pointer;
					filter: brightness(50%);
				}
			}
		}
	}
	button {
		margin: 0 auto;
		width: 15rem;
		height: 4rem;
		border: none;
		background: $white;

		text-transform: uppercase;
		color: $text;
		letter-spacing: 0.1rem;
		font-family: 'Lato';
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 400;

		&:hover {
			transition: all 0.2s ease;
			cursor: pointer;
			color: $black;
		}
	}
}

@media (max-width: 800px) {
	#gallery {
		flex-direction: column;
		padding: 2rem 0;
		.grid {
			width: 100%;
			align-items: center;
			justify-content: center;
			a {
				margin: 2rem 0;
			}
		}
	}
}
</style>
