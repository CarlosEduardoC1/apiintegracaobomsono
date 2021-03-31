const axios = require('axios').default;

const connect = axios.create({ baseURL: `http://18.228.172.18:3000` });

module.exports = connect;