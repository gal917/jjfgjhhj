import config from "../config.json"

const getPasswordConfig = () => config.passwordPolicy;
const getDBUrl = () => config.backend.url;

export { getPasswordConfig, getDBUrl};