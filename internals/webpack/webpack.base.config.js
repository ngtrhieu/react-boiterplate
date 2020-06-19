const path = require('path');

module.exports = {
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  },

  entry: [
    require.resolve('react-app-polyfill/ie11'),
    path.join(process.cwd(), 'src/index.jsx'),
  ],

  module: {
    rules: [
      // js, jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
          query: {
            plugins: ['lodash'],
            presets: [['@babel/env', { targets: { node: 6 } }]],
          },
        },
      },
      // html
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      // mp4, webm
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
      // jpg, png, gif
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024, // inline files smaller than 10kb
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: false,
                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                // Try enabling it in your environment by switching the config to:
                // enabled: true,
                // progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      // svg
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10 * 1024, // Inline files smaller than 10 kB
              noquotes: true,
            },
          },
        ],
      },
      // css (include those in node_modules)
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // font files (eot|otf|ttf|woff|woff2)
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [],

  resolve: {
    modules: ['node_modules', path.resolve(process.cwd())],
    alias: {
      '~': path.resolve(process.cwd(), 'src'),
    },
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
    mainFiles: ['index'],
  },
};
