const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

const srcPath = path.resolve(__dirname, 'src');
const isProd = process.env.NODE_ENV === 'production';

const plugins = [
    new HtmlWebpackPlugin({
        template: path.join(srcPath, 'index.html')
    }),
    !isProd && new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name]-[hash].css'
    }),
    new ForkTsCheckerPlugin()
].filter(Boolean);

const  getCssRules = (withModules) => {
    return [
        MiniCssExtractPlugin.loader,
        withModules ? {
            loader: 'css-loader',
            options: {
                modules:{
                    localIdentName: !isProd ? '[path][name]__[local]' : '[hash:base64]'
                }
            }
        } : 'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        'autoprefixer'
                    ],
                },
            },
        }
        ,
        'sass-loader'
    ];
};

module.exports = {
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src/index.tsx')],
    devtool: 'eval-source-map',
    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    target: isProd ? 'browserslist' : 'web',
    module: {
        rules: [
            {
                test: /\.([tj])sx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.module\.s?css$/,
                use: getCssRules(true)
            },
            {
                test: /\.s?css$/,
                exclude: /\.module\.s?css$/,
                use: getCssRules(false)
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    publicPath: './fonts/',
                    name: '../fonts/[name].[ext]',
                    limit: 1000
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 10kb
                    }
                }
            },
            {
                test: /\.ts?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            eslintPath: require.resolve('eslint'),
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts'],
        alias: {
            '@App': path.resolve(srcPath, 'App'),
            '@styles': path.resolve(srcPath, 'styles'),
            '@utils': path.resolve(srcPath, 'utils'),
            '@Config': path.resolve(srcPath, 'config'),
            '@Models': path.resolve(srcPath, 'store/models'),
            '@Store': path.resolve(srcPath, 'store'),
            '@components': path.resolve(srcPath, 'components')
        }
    },
    plugins,
    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true,
        inline: true
    }
};
