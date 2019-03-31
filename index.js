const path = require('path');
const ngcc = require('@angular/compiler-cli/ngcc');

ngcc.process({
    basePath: path.resolve(process.cwd(), 'node_modules'),
    targetEntryPointPath: '@angular/material/progress-bar',
    propertiesToConsider: ['es2015'],
    compileAllFormats: false,
    createNewEntryPointFormats: true,
});