/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    'ember-cli-babel': {
      includePolyfill: true,
    },
    fingerprint: {
      extensions: [
        'js',
        'css',
        'png',
        'jpg',
        'gif',
        'map',
        'eot',
        'ttf',
        'woff',
        'woff2',
        'svg',
      ],
      prepend: '/ember-page-title/',
    },
    sassOptions: {
      includePaths: ['tests/dummy/app'],
    },
    svg: {
      paths: ['tests/dummy/public/assets/images'],
    },
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  if ('@embroider/webpack' in app.dependencies()) {
    const { Webpack } = require('@embroider/webpack'); // eslint-disable-line
    return require('@embroider/compat') // eslint-disable-line
      .compatBuild(app, Webpack, {
        staticAddonTestSupportTrees: true,
        staticAddonTrees: true,
        staticHelpers: true,
        staticComponents: true,
        skipBabel: [
          {
            package: 'qunit',
          },
        ],
      });
  }

  return app.toTree();
};
