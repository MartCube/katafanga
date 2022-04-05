<template>
	<header>
		<span v-scroll-to="'#home'">home</span>
		<span v-scroll-to="'#about'">about</span>
		<span v-scroll-to="'#gallery'">gallery</span>
		<span v-scroll-to="'#contact'">contact</span>
	</header>
</template>

<style lang="scss" scoped>
header {
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
</style>
