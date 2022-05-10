export default {
	target: 'static',
	loading: { color: '#c5a37d' },
	css: ['~/assets/main.scss'],
	trailingSlash: false,
	components: ['~/components/global', '~/components/sections'],

	head: {
		title: 'Katafanga Island',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
		link: [{ rel: 'icon', type: 'png', href: '/favicon.png' }],
	},

	plugins: [{ src: '@/plugins/vee-validate.js' }],

	buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources', 'nuxt-lazysizes', '@nuxt/image'],
	styleResources: { scss: ['./assets/colors.scss'] },
	// fontLoader: {
	// 	url: {
	// 		local: '/fonts/font-face.css',
	// 		google: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
	// 	},
	// 	prefetch: true,
	// 	preconnect: true,
	// },

	modules: ['vue-scrollto/nuxt'],

	build: {
		transpile: ['vee-validate/dist/rules'],
	},
}
