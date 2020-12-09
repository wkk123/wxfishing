const QQMapKey = require('../config/config').QQMapKey;
const QQMapWX  = require('../plugins/qqmap-wx-jssdk');
const appMap = new QQMapWX({key:QQMapKey});

module.exports = appMap
