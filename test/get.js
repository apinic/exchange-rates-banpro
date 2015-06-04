var assert = require('assert');
var ExchangeRate = require('../lib/exchange-rates');
var exchangeRate = new ExchangeRate();

describe('Get', function() {
  it('Get', function(done) {
    exchangeRate.get(function(err, result) {
      var valid = !isNaN(result.usd.buy);
      var error = new Error('Invalid result');
      if (!valid) throw error;
      done();
    });
  });
});
