var webpack = require('webpack');

module.exports = {
      entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
      ],
      externals: {
        jquery: 'jQuery'
      },
      plugins: [
        new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
        })
      ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      root: __dirname,
      alias: {
        Main: 'app/components/Main.jsx',
        Nav: 'app/components/Nav.jsx',
        Weather: 'app/components/Weather.jsx',
        WeatherForm: 'app/components/WeatherForm.jsx',
        WeatherMessage: 'app/components/WeatherMessage.jsx',
        About: 'app/components/About.jsx',
        Examples: 'app/components/Examples.jsx',
        openWeatherMap: 'app/api/openWeatherMap.jsx',
        ErrorModal: 'app/components/ErrorModal.jsx',
        applicationStyles: 'app/styles/app.scss'
        //Bottom: 'app/components/Bottom.jsx'


      },
      extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [ {
          loader: 'babel-loader',
          query: {
          presets: ['react','es2015','stage-0']
          },
          test: /\.jsx?$/,
          exclude: /(node-modules|bower-components)/
        },
        // {
        //   test: /\.(jpe?g|png|gif|svg)$/i,
        //   loaders: [
        //     'file?hash=sha512&digest=hex&name=[hash].[ext]',
        //     'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false','url-loader'
        //   ]
        // }
      ]
    },
    devtool: 'inline-source-map'
};
