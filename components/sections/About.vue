<template>
	<section class="about">
		<div class="info">
			<h2>paradise found</h2>
			<p>This sprawling 225-acre island of unspoiled beauty, laced by swaying coconut palm trees and natural habitat, is 1 mile long by 1/3 mile wide with 150-foot elevations. The impressive coral reef, which encompasses a pristine blue lagoon, magically has a natural opening of 200 feet wide, thus allowing for luxury yachts over 200 feet to enter and dock, and have the serene protection of the lagoon.</p>
		</div>
		<img src="/about.jpg" alt="about" />
	</section>
</template>

<style lang="scss" scoped>
.about {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 6rem 0;

	img {
		width: 100%;
		max-width: 33rem;
	}

	.info {
		width: 25rem;
		margin-right: 8rem;
	}
}
</style>
