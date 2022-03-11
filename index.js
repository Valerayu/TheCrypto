  localFileExisted = existsSync(join(__dirname, 'ironfish-rust-nodejs.android-arm64.node'))
        try {
          if (localFileExisted) {
            nativeBinding = require('./ironfish-rust-nodejs.android-arm64.node')
          } else {
            nativeBinding = require('ironfish-rust-nodejs-android-arm64')
