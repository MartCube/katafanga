export default {
	target: 'static',
	loading: { color: '#c5a37d' },
	css: ['~/assets/main.scss'],
	trailingSlash: true,
	components: true,

	head: {
		title: 'Katafanga Island',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'user-scalable=no, width=device-width, height=device-height' }, { hid: 'description', name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
		link: [{ rel: 'icon', type: 'png', href: '/favicon.png' }],
	},

	plugins: [{ src: '@/plugins/vee-validate.js' }],

	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources', 'nuxt-lazysizes', '@nuxt/image'],
	styleResources: { scss: ['./assets/colors.scss'] },

	modules: ['vue-scrollto/nuxt'],

	build: {
		transpile: ['vee-validate/dist/rules'],
	},
}
