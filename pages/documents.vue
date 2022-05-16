<template>
	<div id="documents" refs="docs">
		<div class="doc">
			<h2>Appraisal</h2>
			<p>In late November 2007 - an appraisal was commissioned by Landprop Valuations and Consultancy Services, a well known licensed valuation company in Fiji. The valuation of the island with all improvements currently built came to $44 million US. Furthermore the island was appraised at $66 million US after all the development work would be completed.</p>
			<p>Click here to download the PDF document (12mb) of the complete appraisal study.</p>
			<a href="/docs/valuation-of-island.pdf" target="blank">download</a>
		</div>
		<div class="doc">
			<h2>Architect</h2>
			<h2>presentation</h2>
			<p>Click here to download the PDF document (12mb) of the complete appraisal study.</p>
			<a href="/docs/architect-presentation.pdf" target="blank">download</a>
		</div>
		<div class="doc">
			<h2>Blueprints</h2>
			<p>Please enter a password to download all the blueprints in a zip file</p>
			<form ref="form" class="form" autocomplete="off" @submit.prevent="Submit()">
				<span ref="msg" class="test">wrong password</span>
				<input v-model="password" type="password" placeholder="password" />
				<button>Submit</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		password: '',
		key: 'Katafanga2018',
	}),
	methods: {
		Submit() {
			if (this.password === this.key) {
				window.location.href = '/docs/blueprints.zip'
				// reset
				this.password = ''
				this.$refs.msg.classList.value = ''
			} else this.$refs.msg.classList.value = 'show'
		},
	},
}
</script>

<style lang="scss" scoped>
#documents {
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	background: $bg;

	padding: 6rem 0;
	h2 {
		width: 100%;
		text-align: center;
	}

	.doc {
		margin: 0 4rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 20rem;
		text-align: center;
		span {
			display: block;
			color: $error;
			margin: 1rem;
			opacity: 0;
			&.show {
				opacity: 1;
			}
		}

		p {
			margin-bottom: 1rem;
		}
		a {
			border: none;
			background: $white;
			padding: 1rem 2rem;

			color: $black;
			text-decoration: none;
			text-transform: uppercase;
			letter-spacing: 0.1rem;
			transition: all 0.2s ease;
			&:hover {
				cursor: pointer;
				filter: brightness(85%);
			}
		}
		form {
			input {
				width: 11rem;
				text-align: center;
				border: none;
				background: $white;
				padding: 1rem;
				margin-bottom: 1rem;

				::placeholder {
					color: $light-grey;
					font-size: 1rem;
				}
			}
			button {
				width: 11rem;
				border: none;
				background: $white;
				padding: 1rem 2rem;

				color: $black;
				font-size: 1rem;
				text-decoration: none;
				text-transform: uppercase;
				letter-spacing: 0.1rem;
				transition: all 0.2s ease;
				&:hover {
					cursor: pointer;
					filter: brightness(85%);
				}
			}
		}
	}
}

@media (max-width: 1100px) {
	#documents {
		flex-direction: column;
		align-items: center;
		.doc a {
			margin-bottom: 6rem;
		}
	}
}
</style>
