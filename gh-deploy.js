const ghpages = require('gh-pages');
const path = require('path');

// Site deployment
ghpages.publish(
  path.join(__dirname),
  {
    src: [
      'CNAME',
      '!gh-deploy.js',
      '!Makefile',
      'static/**.*',
      '*.{json,ico,html,js}'
    ],
    message: 'Automatic deployment update',
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('No error in the resume deployment');
    }
  }
);
