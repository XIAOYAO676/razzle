'use strict';

const path = require('path');

module.exports = {
  plugins: [
    {
      name: 'scss',
      options: {
        sass: {
          dev: {
            data: `@import "${path.resolve(__dirname, './src/prepend.scss').replace(/\\/g, '/')}";`,
          },
          prod: {
            data: `@import "${path.resolve(__dirname, './src/prepend.scss').replace(/\\/g, '/')}";`,
          },
        },
      },
    },
  ],
};