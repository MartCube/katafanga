<template>
	<section class="contact">
		<h2>contact us</h2>
		<p>Get in touch for more information about Katafanga island</p>
		<ValidationObserver ref="form" autocomplete="off" class="form" tag="form" @submit.prevent="Submit()">
			<Input id="firstName" placeholder="First Name" rules="required" @getValue="storeValue" />
			<Input id="lastName" placeholder="Last Name" rules="required" @getValue="storeValue" />
			<Input id="email" placeholder="Email" rules="email|required" @getValue="storeValue" />
			<Input id="number" placeholder="Phone Number" rules="required" @getValue="storeValue" />
			<Textarea id="message" placeholder="Message" rules="required" @getValue="storeValue" />
			<button>Submit</button>
		</ValidationObserver>
		<div class="policy">
			<span>Copyright © 2022 Katafanga</span>
		</div>
	</section>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
// import * as emailjs from '@emailjs/browser'
export default {
	components: {
		ValidationObserver,
	},
	data: () => ({
		form: {
			firstName: '',
			lastName: '',
			email: '',
			number: '',
			message: '',
		},
		loading: false,
	}),
	methods: {
		async Submit() {
			const isValid = await this.$refs.form.validate()
			if (!isValid) return
			console.log('valid')
			// emailjs.sendForm('default_service', 'service_l807s5g', this.$refs.form, 'O9kaL-kw7T0WfpVbt').then(
			// 	(result) => {
			// 		console.log('SUCCESS!', result.text)
			// 	},
			// 	(error) => {
			// 		console.log('FAILED...', error.text)
			// 	},
			// )
		},
		storeValue(input) {
			switch (input.name) {
				case 'firstName': {
					this.form.firstName = input.value
					break
				}
				case 'lastName': {
					this.form.lastName = input.value
					break
				}
				case 'email': {
					this.form.email = input.value
					break
				}
				case 'number': {
					this.form.number = input.value
					break
				}
				case 'message': {
					this.form.message = input.value
					break
				}
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.contact {
	width: 100%;
	height: 100%;
	min-height: 100vh;
	padding-top: 4rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;

	background: $light-grey;
	h2 {
		margin-bottom: 2rem;
	}
	p {
		padding: 0 2rem;
		text-align: center;
		margin-bottom: 2rem;
	}
	.form {
		width: 100%;
		max-width: 70rem;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		button {
			width: 15rem;
			height: 4rem;
			margin-top: 2rem;
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
	.policy {
		width: 100%;
		height: 4rem;
		margin-top: 4rem;

		background: $white;
		display: flex;
		justify-content: center;
		align-items: center;

		font-family: 'Lato';
		font-size: 1rem;
		line-height: 1.5rem;
		color: $black;
	}
}

@media (max-width: 1100px) {
	.contact {
		.form {
			max-width: 40rem;
		}
	}
}

@media (max-width: 700px) {
	.contact {
		.form {
			max-width: 40rem;
			flex-direction: column;
			flex-wrap: nowrap;
			padding: 0 2rem;

			button {
				width: 100%;
				align-self: center;
			}
		}
	}
}
</style>
