var uncss = require('uncss');
var fs = require('fs');

var files   = ['http://localhost:63342/data/20171001015306/index.html'],
    options = {
        csspath      : '.',
        stylesheets  : ['base.css', 'changyan2.css', 'common.css', 'default.css', 'shCore.css', 'shThemeDefault.css'],
        timeout      : 1000,
    };

uncss(files, options, function (error, output) {
    // console.log(output);
    fs.writeFileSync('all.css', output)
});