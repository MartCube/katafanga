<template>
	<ValidationProvider v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="input_container">
		<input :id="id" v-model="inputValue" type="input" :placeholder="placeholder" :name="id" @change="emitValue" />

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
			default: undefined,
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
$width: 34rem;
$height: 4rem;
.input_container {
	width: 100%;
	max-width: $width;
	height: $height;
	margin-bottom: 2rem;

	display: flex;
	position: relative;
	input {
		width: inherit;
		height: inherit;
		padding: 0 2rem;
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
		top: calc(50% - 1rem);
		right: 2rem;

		text-transform: capitalize;
		color: $error;
		font-family: 'Lato';
		font-size: 1rem;
		line-height: 2rem;
		font-weight: 400;
	}
}
@media (max-width: 1100px) {
	.input_container {
		max-width: initial;
	}
}
</style>
