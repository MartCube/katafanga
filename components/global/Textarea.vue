<template>
	<ValidationProvider v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="input_container">
		<textarea :id="id" v-model="inputValue" :placeholder="placeholder" :name="id" @change="emitValue"></textarea>

		<div v-if="errors.length" class="error" :class="classes">
			{{ errors[0] }}
		</div>
	</ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
	components: {
		ValidationProvider,
	},
	props: {
		id: {
			type: String,
			required: true,
		},
		rules: {
			type: [Object, String],
			required: true,
		},
		placeholder: {
			type: String,
			required: true,
		},

		mode: {
			type: String,
			default: 'eager',
		},
	},
	data: () => ({
		inputValue: '',
	}),
	methods: {
		emitValue() {
			this.$emit('getValue', { name: this.name, value: this.inputValue })
		},
	},
}
</script>

<style lang="scss" scoped>
.input_container {
	width: 100%;
	max-width: 70rem;
	height: 25rem;

	display: flex;
	position: relative;

	textarea {
		resize: none;
		width: inherit;
		height: inherit;
		padding: 2rem;

		background: $white;
		border: none;

		color: $text;
		font-family: 'Lato';
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 400;
	}

	.error {
		position: absolute;
		top: 2rem;
		right: 2rem;

		text-transform: capitalize;
		color: $error;
		font-family: 'Lato';
		font-size: 1rem;
		line-height: 2rem;
		font-weight: 400;
	}
}

@media (max-width: 600px) {
	.input_container {
		input {
			width: 80vw;
			height: 62px;
		}
	}
}
</style>
