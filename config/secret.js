module.exports = {
  database: 'mongodb://root:abc123@ds163510.mlab.com:63510/blockvisoredu',
  port: 8080,
  secretKey: 'Arasfjsdfsdklfkjsdf',
  facebook: {
    clientID: '400392623791484',
    clientSecret:'4813cee181e409130fc3d5f7010731c9',
    profileFields: ['emails', 'displayName'],
    callbackURL:'http://localhost:8080/auth/facebook/callback',
    passReqToCallback: true,
  }
}
