<template>
	<section id="contact" ref="contact">
		<template v-if="!sent">
			<h2>contact us</h2>
			<p>Get in touch for more information about Katafanga island</p>
			<form ref="form" class="form" autocomplete="off" @submit.prevent="Submit()">
				<ValidationObserver ref="validation" class="validation" tag="div">
					<Input id="firstName" placeholder="First Name" rules="required" @getValue="storeValue" />
					<Input id="lastName" placeholder="Last Name" rules="required" @getValue="storeValue" />
					<Input id="email" placeholder="Email" rules="email|required" @getValue="storeValue" />
					<Input id="number" :placeholder="`${numberA} + ${numberB} = ?`" rules="required" @getValue="storeValue" />
					<Textarea id="message" placeholder="Message" rules="required" @getValue="storeValue" />
					<button>Submit</button>
				</ValidationObserver>
			</form>
		</template>
		<div v-else class="message">
			<h2>Thank you</h2>
			<p>We've received your message and will contact you soon.</p>
			<button @click="newForm">Write New Message</button>
		</div>
	</section>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import * as emailjs from '@emailjs/browser'

export default {
	name: 'Contact',
	components: {
		ValidationObserver,
	},
	data: () => ({
		sent: false,
		form: {
			email: '',
			firstName: '',
			lastName: '',
			number: 0,
		},
	}),
	computed: {
		numberA() {
			return Math.floor(Math.random() * 10)
		},
		numberB() {
			return Math.floor(Math.random() * 10)
		},
		result() {
			return this.numberA + this.numberB
		},
	},
	methods: {
		async Submit() {
			const isValid = await this.$refs.validation.validate()

			if (!isValid) return
			if (this.form.number !== this.result) return

			emailjs.sendForm('default_service', 'katafanga', this.$refs.form, 'usk4gEtUUChwNhggm').then(
				(result) => {
					console.log('SUCCESS!', result.text)
				},
				(error) => {
					console.log('FAILED...', error.text)
				},
			)
			this.sent = true
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
					this.form.number = Number(input.value)
					break
				}
				case 'message': {
					this.form.message = input.value
					break
				}
			}
		},
		newForm() {
			this.sent = false
		},
	},
}
</script>

<style lang="scss" scoped>
#contact {
	width: 100%;
	height: 100%;
	// min-height: 100vh;
	padding-top: 4rem;

	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;

	background: $bg;
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
		display: flex;
		justify-content: center;
		.validation {
			width: 100%;
			max-width: 50rem;
			margin-bottom: 6rem;

			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			button {
				align-self: center;
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
	}
	position: relative;

	.message {
		width: 90%;
		min-height: 40vh;
		display: flex;
		flex-direction: column;
		align-items: center;
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
}

@media (max-width: 1100px) {
	#contact {
		.form {
			width: 90%;

			.validation {
				flex-direction: column;
				flex-wrap: nowrap;
				justify-content: center;
				button {
					align-self: center;
				}
			}
		}
	}
}
</style>
