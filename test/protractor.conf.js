exports.config = {
    // Which WebDrivers to use
    multiCapabilities:[ // its single browser counterpart is 'capabilities'.
      
        {
            'browserName' : 'chrome'
        }
    ],

    specs: [ // Where to look for specs
        './**/*.spec.js'
    ],

    baseUrl: 'http://localhost:9000/' // Where your app is being served from
};

if (process.env.SNAP_CI) {
  exports.config.chromeDriver = '/usr/local/bin/chromedriver';
   exports.config.chromeOnly = true;	
}

