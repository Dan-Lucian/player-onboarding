const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        player: './app.ts',
        index: './index.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /assets/, /dist/]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4|bmp|m3u8|xml)$/i,
                type: 'asset/resource'
            },
            {
                // Used for streaming chunks, since they also end in .ts
                test: /\.ts$/,
                type: 'asset/resource',
                include: /assets/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.resolve(__dirname, 'src/index.html'),
            inject: 'body'
        })
    ],
    resolve: {
        alias: {
            styles: path.resolve(__dirname, 'src/styles')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
        modules: [path.resolve('./node_modules'), path.resolve('./src')]
    }
};
