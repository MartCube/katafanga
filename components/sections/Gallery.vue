<template>
	<section class="gallery">
		<div class="grid">
			<p>list of images</p>
		</div>
		<div class="info">
			<h2>explore the island</h2>
			<p>Katafanga is located in the exclusive Lau Group in Eastern Fiji. These 57 islands are some of the most sought after due to their privacy, as they are remote and sparsely populated in all of Fiji. Colorful reefs wedge themselves between the ocean and the secluded bays and beaches.</p>
			<p>The climate here is drier than most parts of Fiji. Tourism is less developed here than in other parts of Fiji but this is precisely why these islands appeal to many who seek to experience a true island getaway. Katafanga is a one-hour flight from the international airport in Nadi, flying over some of the most beautiful scenery in the world, or by yacht, sailing through the most amazing waters. A huge amount of work has been done on this island.</p>
		</div>
	</section>
</template>

<script>
// import CoolLightBox from 'vue-cool-lightbox'
// import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {}
</script>

<style lang="scss" scoped>
.gallery {
	width: 100%;
	display: flex;
	padding: 6rem;
	background: $light-grey;

	.info {
		width: 400px;
		background: $dark-grey;
		padding: 2rem;
		h2 {
			margin: 2rem 0;
		}
		p {
			margin-bottom: 2rem;
		}
	}
}
</style>
