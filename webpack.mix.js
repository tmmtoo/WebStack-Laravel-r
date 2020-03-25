const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss","public/css");

mix.scripts(
    [
        "node_modules/material-dashboard/assets/js/core/jquery.min.js",
        "node_modules/material-dashboard/assets/js/core/popper.min.js",
        "node_modules/material-dashboard/assets/js/core/bootstrap-material-design.min.js",
        "node_modules/material-dashboard/assets/js/plugins/perfect-scrollbar.jquery.min.js",
        "node_modules/material-dashboard/assets/js/plugins/chartist.min.js",
        "node_modules/material-dashboard/assets/js/plugins/bootstrap-notify.js",
        "node_modules/material-dashboard/assets/js/material-dashboard.min.js"
    ],
    "public/js/dashboard.js"
);

mix.styles(
    ["node_modules/material-dashboard/assets/css/material-dashboard.min.css"],
    "public/css/dashboard.js"
);
