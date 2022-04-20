<template>
	<div class="page">
		<Intro />
		<About />
		<Gallery />
		<Map />
		<Documents />
		<Contact />
	</div>
</template>

<script>
import { fadeIn } from '~/assets/anime'

export default {
	mounted() {
		fadeIn(document.querySelector('.page'))
	},
}
</script>

<style scoped>
.page {
	opacity: 0;
}
</style>
