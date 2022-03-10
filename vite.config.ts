import { resolve } from 'path'

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import postcssPresetEnv from 'postcss-preset-env'
import inject from '@rollup/plugin-inject'
import tsconfigPaths from 'vite-tsconfig-paths'

import { browserslist } from './package.json'

export default defineConfig(configEnv => {
  const envDir = resolve(__dirname, './env')
  const isDevelopment = configEnv.mode === 'development'
  const env = loadEnv(configEnv.mode, envDir, ['DEV_', 'VITE_'])

  const PORT = Number(env.DEV_PORT || 8888)

  return {
    envDir,
    define: {
      'process.env.NODE_ENV': `"${configEnv.mode}"`,
    },
    plugins: [
      tsconfigPaths(),
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      inject({
        'window.store': 'store2',
        store: 'store2',
        include: ['*/**/*.js'],
      }),
      legacy({
        targets: browserslist[configEnv.mode],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '~': resolve(__dirname, 'node_modules'),
        'store2/src/old': resolve(
          __dirname,
          'node_modules/store2/src/store.old.js'
        ),
        'store2/src/cache': resolve(
          __dirname,
          'node_modules/store2/src/store.cache.js'
        ),
        'store2/src/cookie': resolve(
          __dirname,
          'node_modules/store2/src/store.cookie.js'
        ),
        'store2/src/cookies': resolve(
          __dirname,
          'node_modules/store2/src/store.cookies.js'
        ),
        'store2/src/on': resolve(
          __dirname,
          'node_modules/store2/src/store.on.js'
        ),
        'store2/src/deep': resolve(
          __dirname,
          'node_modules/store2/src/store.deep.js'
        ),
        moment: resolve(__dirname, 'src/utils/replacemoment'),
        'verification-input': resolve(
          __dirname,
          'src/utils/verification-input'
        ),
      },
    },
    css: {
      postcss: {
        map: true,
        modules: true,
        plugins: [
          postcssPresetEnv({
            stage: 2,
          }),
        ],
      },
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]',
      },
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        // preserveEntrySignatures: 'allow-extension',
        // preserveModules: true,
        output: {
          manualChunks(id) {
            if (
              id.match(/@emotion|@babel|@sinclair|@radix-ui/) ||
              id.includes('jsx') ||
              id.match(/react|react-[\d\w]+/)
            ) {
              return 'runtime'
            }
            if (id.includes('node_modules')) {
              if (id.includes('tailwindcss')) {
                return 'tailwindcss'
              } else if (id.match(/rc-upload/)) {
                return 'rc-upload'
              }
              const chunkname = id.split('node_modules/')[1].split('/')[0]
              console.log(chunkname)
              return chunkname
            }
            if (id.includes('uikits/')) {
              return 'uikits'
            }
          },
        },
      },
    },
    server: {
      port: PORT,
      host: env.DEV_HOST || '0.0.0.0',
      proxy: {
        '/api': {
          target: env.DEV_API_PROXY,
          // secure: true,
          changeOrigin: true,
          cookieDomainRewrite: {
            '.ai-ops.cn': `localhost`,
            'google.com': 'localhost',
            'accounts.google.com': 'localhost',
            localhost: 'accounts.google.com',
            '*': '',
          },
          rewrite: path => path.replace(/^\/api/, ''),
        },
        '/upload': {
          target: 'https://asset.ai-ops.cn',
          secure: false,
          changeOrigin: true,
          rewrite: path => {
            return path.replace(/^\/upload/, '/v1')
          },
        },
      },
    },
    optimizeDeps: {
      // include: [
      //   'react',
      //   'react-dom',
      //   '@emotion/react',
      //   '@radix-ui',
      //   'dayjs',
      //   'dayjs',
      //   'qs',
      //   'videojs',
      //   'rc-upload',
      //   'components/uikit',
      // ],
      // disabling Vite from optimizing dependencies before bug fixed
      // https://github.com/nshen/test-npm-crate/issues/1
      exclude: ['@shore-ai/x-engine'],
    },
  }
})
