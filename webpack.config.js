const path = require("path");
const { webpack } = require( "webpack" );
const MODE = "production";
const enabledSourceMap = MODE === "development";

module.exports = {
  cache: true,
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,
  //開始点となるファイル
  module: {
    rules: [
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.(scss|css)$/, // 対象となるファイルの拡張子
        use: [
          // linkタグに出力する機能
          "style-loader",
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              // sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap
            },
          },
        ],
      },
    ],
  },
  
  entry: {app: './src/index.js'},
  
  //出力先のファイル
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  // devtool: 'source-map',
  
     //webpack-dev-server用設定
    devServer: {
      open: true,//falseブラウザを自動で開くか否か
      contentBase: path.join(__dirname, "dist"),
      watchContentBase: true, //HTML等コンテンツのルートディレクトリ
      port: 4000, //ポート番号
      // openPage: "index.html",
      // lazy: true
  },
 
};
