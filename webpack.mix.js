const mix = require('laravel-mix');
require('@tinypixelco/laravel-mix-wp-blocks');

mix.disableNotifications();
mix.setPublicPath('dist');

mix.css('resources/css/app.css', 'css').css('resources/css/editor.css', 'css');

mix.js('resources/js/app.js', 'js')
    .js('resources/js/customizer.js', 'js')
    .blocks('resources/js/editor.js', 'js')
    .extract();

mix.copy('resources/images/**', 'images').copy('resources/fonts/**', 'fonts');

if (mix.inProduction()) {
    mix.version();
}
