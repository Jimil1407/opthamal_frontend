const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      crypto: false, // Remove crypto fallback for Webpack 5
    },
  },
};