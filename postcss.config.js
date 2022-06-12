module.exports = {
    plugins: [
        require('postcss-nested'),
        require('postcss-mixins'),
        require('postcss-preset-env'),
        require('autoprefixer'),
        require('postcss-reporter'),
        require('cssnano'),
    ],
 };