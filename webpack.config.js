const path = require('path');

module.exports = {
  mode: 'development', // Ou 'production' para produção
  entry: './src/index.js', // Arquivo de entrada do seu aplicativo React
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Arquivo de saída gerado pelo Webpack
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Regex para arquivos de imagem
        use: [
          {
            loader: 'file-loader', // Use o loader de arquivo para lidar com arquivos de imagem
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Pasta de saída para as imagens no diretório 'dist'
            },
          },
        ],
      },
    ],
  },
};
