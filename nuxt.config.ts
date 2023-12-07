// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    css: ['@/assets/scss/app.scss'],
    modules: ["@nuxt/image"],
    build: {
        transpile: [
            'gsap'
        ]
    }
});
