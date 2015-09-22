var ENV = process.env;

var Menta = {
  isProduction: function() {
    return "production" === this.getEnvironment();
  },

  isStaging: function() {
    return "staging" === this.getEnvironment();
  },

  isDevelopment: function() {
    return "development" === this.getEnvironment();
  },

  isTest: function() {
    return "test" === this.getEnvironment();
  },

  getEnvironment: function() {
    return ENV.ENVIRONMENT || ENV.NODE_ENV || "development";
  }
};

module.exports = Menta;
