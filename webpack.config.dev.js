import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin  from 'extract-text-webpack-plugin';

const VENDOR_LIBS = [
  "angular",
  "@uirouter/angularjs"
];

export default {
  devtool: 'inline-source-map',
  entry: {
    main : path.resolve(__dirname, 'demo/index'),
    vendor : VENDOR_LIBS
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    //Para manejar el css
    new ExtractTextPlugin('[name].[contenthash].css'),

    //Divide el build en chunks
    new webpack.optimize.CommonsChunkPlugin({
      names : ['main','vendor']
    }),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'demo/index.html',
      inject: true
    })

  ],
  module: {
    rules :[
      //Usamos babel para interpretar los JS en ES6 y dejarlos entendibles para el navegador
      {
        use :'babel-loader',
        test :/\.js$/,
        exclude : /nodes_modules/
      },
      {
        //Empaqueta html
        test: /\.html$/,
        loader: 'raw-loader'
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.scss/, exclude: /node_modules/, loader: 'style-loader!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'},
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap') },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
          ]
      }
    ]
  }
}
