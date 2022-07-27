const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //this is the either production/develpoment - default is prod
  mode: process.env.NODE_ENV,
  
  // entry point - creates the dependency graph there
  entry: './Client/index.js',
  
  //output is where everything will be sent after uglified/minified
  output: {
    path: path.resolve(__dirname, 'build'),
    // where it goes
    filename: 'bundle.js',
  },

  devServer : { 
    // proxy: {
    //   '/': {
    //     target: 'https://api.edamam.com',
    //     secure: false,
    //   },
      // "/": "https://api.edamam.com",
      // '/api/**': 'http://localhost:3000',
      //anything hitting our database should be hitting 3000
      //api reroutes anything going to /api to localhost:3000
      // takes care of fetch call in leaders.js
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      //creates a new html file and injecting script - referencing the "template"
      //defer source (check console in dev tools - go to index)
      title: 'Development',
      // necessary - template! -- use index.html as default
      // THIS SERVES THE STATIC FILE - STATIC IN DEVSERVER IS USELESS
      template: './index.html'
    }),
    new MiniCSSExtractPlugin({
      filename: './Client/style.css',
    }),
  ],
  
  module: {
    rules: [
      // test, exclude (node modules most likely), pass 'options' to the loader 
      {
        // tests if the file is jsx - backslash here to exit out the .
        test: /\.jsx?/,
        // exclude node_modules
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              //enables the latest javascripts
              '@babel/preset-env', 
              '@babel/preset-react'
            ]
          }
        }
      },

      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader']
      }
      
      // {
      //   // test is file is sass -> css -> style?
      //   test: /\.s[ac]ss$/i,
      //   exclude: /node_modules/,
      //   use: [
      //     //need to install all loaders first 
      //     // 'style' nodes from JS strings - THIRD
      //     "style-loader", 
      //     // CSS to CommonJS - SECOND
      //     "css-loader",
      //     // Sass to CSS - FIRST
      //     "sass-loader",
      //   ],
      // },

      // {
      //   // test is file is css -> style?
      //   test: /\.css$/i,
      //   exclude: /node_modules/,
      //   use: [
      //     //need to install all loaders first 
      //     // 'style' nodes from JS strings 
      //     "style-loader", 
      //     // CSS to CommonJS 
      //     "css-loader",
      //   ],
      // }
    ]
  }
}
