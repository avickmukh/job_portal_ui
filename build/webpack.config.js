const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const project = require('../project.config')

const inProject = path.resolve.bind(path, project.basePath)
const inProjectSrc = (file) => inProject(project.srcDir, file)

const __DEV__ = project.env === 'development'
const __TEST__ = project.env === 'test'
const __PROD__ = project.env === 'production'

const devtool = (__PROD__ && project.sourcemaps) ? 'source-map' : 'eval-source-map'

const config = {
    entry: {
      normalize: [
        inProjectSrc('normalize'),
      ],
      main: [
        inProjectSrc(project.main),
      ],
    },
    mode: __DEV__ ? 'development' : 'production',
    optimization: { minimize: false },
    devtool,
    output: {
      path: inProject(project.outDir),
      filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
      publicPath: project.publicPath,
      globalObject: 'this'
    },
    resolve: {
      modules: [
        inProject(project.srcDir),
        'node_modules',
      ],
      extensions: ['*', '.js', '.jsx', '.json'],
      alias:{
        logger: path.resolve(__dirname, '../src/utils/logger')
      }
    },
    externals: project.externals,
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test    : /\.(png|jpg|gif)$/,
            loader  : 'url-loader',
            options : {
              limit : 8192,
            },
          }
        ]
      },
      plugins: [
        // new webpack.IgnorePlugin(/vertx/),
        // new webpack.EnvironmentPlugin(['Docker_HOST', 'NODE_ENV']),
        new webpack.DefinePlugin(Object.assign({
          'process.env': { NODE_ENV: JSON.stringify(project.env) },
          __DEV__,
          __TEST__,
          __PROD__,
        }, project.globals)),
        // new webpack.ProvidePlugin({
        //   logger: 'logger'
        // })
      ],
    // devServer: {
    //     contentBase: path.join(__dirname, 'public')
    // }
};
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: __DEV__ ? 'styles/[name].css' : 'styles/[name].[hash].css',
  chunkFilename: __DEV__ ? 'styles/[id].css' : 'styles/[id].[hash].css'
})
config.plugins.push(miniCssExtractPlugin)
;[
    ['woff', 'application/font-woff'],
    ['woff2', 'application/font-woff2'],
    ['otf', 'font/opentype'],
    ['ttf', 'application/octet-stream'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['svg', 'image/svg+xml'],
  ].forEach((font) => {
    const extension = font[0]
    const mimetype = font[1]
  
    config.module.rules.push({
      test    : new RegExp(`\\.${extension}$`),
      loader  : 'url-loader',
      options : {
        name  : 'fonts/[name].[ext]',
        limit : 10000,
        mimetype,
      },
    })
  })
// HTML Template
// ------------------------------------
config.plugins.push(new HtmlWebpackPlugin({
  template: inProjectSrc('index.html'),
  inject: true,
  minify: {
    collapseWhitespace: true,
  },
}))

  // Development Tools
// ------------------------------------
if (__DEV__) {
  config.entry.main.push(
    `webpack-hot-middleware/client.js?path=${config.output.publicPath}__webpack_hmr`
  )
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  )
}

// Bundle Splitting
// ------------------------------------
if (!__TEST__) {
  const bundles = ['normalize', 'manifest']

  if (project.vendors && project.vendors.length) {
    bundles.unshift('vendor')
    config.entry.vendor = project.vendors
  }
 // config.plugins.push(new webpack.optimize.CommonsChunkPlugin({ names: bundles }))
}

// Production Optimizations
// ------------------------------------
if (__PROD__) {
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: false,
        ecma: 6,
        mangle: true
      },
      sourceMap: true
    })
  )
}

  module.exports = config