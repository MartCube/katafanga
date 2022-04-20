<template>
	<section id="documents" refs="docs">
		<h2>Documents</h2>
		<div class="doc">
			<nuxt-img src="/docs/appraisal.png" alt="appraisal" />
			<a href="/docs/valuation-of-island.pdf" target="blank">appraisal</a>
		</div>
		<div class="doc">
			<nuxt-img src="/docs/architecture.png" alt="architecture" />
			<a href="/docs/architect-presentation.pdf" target="blank">architect's presentation</a>
		</div>
		<div class="doc">
			<nuxt-img src="/docs/blueprints.png" alt="blueprints" />
			<a href="/docs/blueprints.zip" target="blank">blueprints</a>
		</div>
	</section>
</template>

<style lang="scss" scoped>
#documents {
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;

	padding: 6rem 0;
	h2 {
		width: 100%;
		text-align: center;
	}

	.doc {
		display: flex;
		flex-direction: column;
		align-items: center;

		a {
			margin: 1rem 0;

			color: $text;
			text-transform: capitalize;
			transition: all 0.35s ease;
			&:hover {
				cursor: pointer;
				color: $black;
			}
		}
	}
}

@media (max-width: 1100px) {
	#documents {
		flex-direction: column;
	}
}
</style>
