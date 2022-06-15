<template>
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
	</div>
</template>

<style lang="scss" scoped>
.info {
	z-index: 1;
	// transform: translateY(100%); // anime

	user-select: none;

	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

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

@media (max-width: 1100px) {
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

@media (max-width: 600px) {
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
</style>
