// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-svgo', "@tresjs/nuxt", 'nuxt-icon', '@nuxt/fonts'],
  app: {
    head: {
      link: [{
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css'
      }]
    }
  },
  content: {
    markdown: {
      remarkPlugins: [
        'remark-math'
      ],
      rehypePlugins: {
        'rehype-katex': {
          output: 'html'
        },
      }
    },
    highlight: {
      theme: 'github-dark',
      langs: [
        'c',
        'cpp',
        'java',
        'python'
      ]
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
