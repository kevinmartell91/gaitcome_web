// /**
//  * System configuration for Angular samples
//  * Adjust as necessary for your application needs.
//  */
// (function (global) {
//   System.config({
//     paths: {
//       // paths serve as alias
//       'npm:': 'node_modules/'
//     },
//     // map tells the System loader where to look for things
//     map: {
//       // our app is within the app folder
//       app: 'app',

//       // angular bundles
//       '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
//       '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
//       '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
//       '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
//       '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
//       '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
//       '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
//       '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
//       '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
//       '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
//       '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',

//       // other libraries
//       'rxjs':                             'npm:rxjs',
//       // 'angular2-mdl':                     'npm:angular2-mdl',
//       //'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
//     },
//     // packages tells the System loader how to load when no filename and/or no extension
//     packages: {
//       app: {
//         main: 'main.js',
//         defaultExtension: 'js'
//       },
//       rxjs: {
//         defaultExtension: 'js'
//       }
//     }
//   });
// })(this);


/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    '@angular':                   'node_modules/@angular',
    'angular2-mdl':               'node_modules/angular2-mdl',
    'ng2-charts':                 'node_modules/ng2-charts'
    // 'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-mdl':               { main: 'bundle/angular2-mdl.js'},
    // 'angular2-mdl':               { defaultExtension: 'js'}
    'angular2-mdl/components/':   { main: 'index.js',  defaultExtension: 'js' },
    //'ng2-charts':                 { main: 'bundles/ng2-charts.js'},
    // OK 'ng2-charts':                 { defaultExtension: 'js'},
    'ng2-charts':                 { main: 'bundles/ng2-charts.js', defaultExtension: 'js'},
    //'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    // 'router-deprecated',
    'upgrade',
  ];
  // var angular2mdlPackageNamesComponents = [
    // 'badge'
  //   'button',
  //   'card',
  //   'checkbox',
  //   'chip',
  //   'common',
  //   'dialog',
  //   'dialog-outlet',
  //   'icon',
  //   'icon-toggle',
  //   'layout',
  //   'list',
  //   'menu',
  //   'progress',
  //   'radio',
  //   'shadow',
  //   'slider',
  //   'snackbar',
  //   'spinner',
  //   'switch',
  //   'table',
  //   'tabs',
  //   'textfield',
  //   'tooltip'
  // ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Individual files for angular2-mdl/components (~300 requests):
  // function packIndexAngular2mdlComponents(pkgNameComponent) {
    // packages['angular2-mdl/components/'+pkgNameComponent] = { main: 'components/'+pkgNameComponent + 'index.js', defaultExtension: 'js' };
    // packages['angular2-mdl/components/'] = { main: 'index.js' defaultExtension: 'js'};
  //}
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/'+pkgName + '.umd.js', defaultExtension: 'js' };
  };


  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Most environments should use UMD; some (Karma) need the individual index files
  // var setPackageConfigAnglular2mdlComponents = System.packageWithIndex ? packIndexAngular2mdlComponents : packIndexAngular2mdlComponents;


  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  // Add package entries for angular2-mdl pakages components
  // angular2mdlPackageNamesComponents.forEach(setPackageConfigAnglular2mdlComponents);

  var config = {
    map: map,
    packages: packages
  }
  console.log (config);

  System.config(config);
})(this);
