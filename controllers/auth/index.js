const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updateSubscriptions = require('./updateSubscriptions');

module.exports = {
    register,
    login,
    logout,
    getCurrent,
    updateSubscriptions,
}