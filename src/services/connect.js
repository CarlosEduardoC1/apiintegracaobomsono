const axios = require('axios').default;

const connect = axios.create({ baseURL: `https://5858921b45f5.ngrok.io` });

module.exports = connect;