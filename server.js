require('dotenv').config();
const config={
    apikey: process.env.API_KEY,
    serverSecret: process.env.SERVER_SECRET,
    isKalvian: process.env.IS_KALVIAN==='true',
};
module.exports = config;
console.log("Environment Configuration");
console.log(config);