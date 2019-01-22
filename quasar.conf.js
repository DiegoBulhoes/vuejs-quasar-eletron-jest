/* eslint-disable func-names */
// Configuration for your app

module.exports = function (ctx) {
  return {
    plugins: [
      'i18n',
      'axios',
    ],
    css: [
      'app.styl',
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
    ],
    supportIE: false,
    build: {
      scopeHoisting: true,
      // vueRouterMode: 'history',
      // vueCompiler: true,
      gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack(cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        });
      },
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true, // opens browser window automatically
    },
    framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide',
      ],
      directives: [
        'Ripple',
      ],
      plugins: [
        'Notify',
      ],
      // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
      // i18n: 'de' // Quasar language
    },
    animations: [],
    ssr: {
      pwa: false,
    },
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        name: 'Quasar App',
        short_name: 'Quasar-PWA',
        description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'statics/icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'statics/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      bundler: 'builder', // or 'packager'
      // extendWebpack(cfg) {
      //   // do something with Electron process Webpack cfg
      // },
      packager: {},
      builder: {
        productName: 'Vuejs-quasar',
        appId: 'quasar-app',
        copyright: 'Copyright © year DiegoBulhoes',
        icon: 'src-electron/icons/linux-512x512.png',
        linux: {
          executableName: 'quasar-app',
          category: 'Education',
          description: 'Example of a Vue JS application with Quasar and Eletron, configured to generate AppImage, deb and tar.gz.',
          synopsis: 'Example of a Vue JS application with Quasar and Eletron.',
          maintainer: 'DiegoBulhoes',
          desktop: 'Vuejs-quasar',
          target: ['AppImage', 'deb', 'tar.gz'],
        },
      },
    },
  };
};
