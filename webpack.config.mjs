import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

export default {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'main.js',
    publicPath: isProduction ? './' : '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/public/index.html'
    })
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
  devServer: {
    port: 3035,
    static: {
      directory: path.join(__dirname, 'src/assets'),
      publicPath: '/assets'
    },
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      }
    ]
  }
};
