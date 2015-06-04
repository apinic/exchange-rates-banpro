var request = require('request');
var cheerio = require('cheerio');

var ExchangeRate = function() {

};

ExchangeRate.prototype.get = function(callback) {
  var self = this;

  var options = {
    url: 'https://www.banpro.com.ni/quienes-somos.asp',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.81 Safari/537.36'
    }
  };


  request.get(options, function(err, httpResponse, body) {
    if (err) {
      callback(err, null);
    }
    else {
      $ = cheerio.load(body);

      var result = {
        usd: {
          buy: '',
          sale: ''
        },
        eur: {
          buy: '',
          sale: ''
        }
      };

      var table = $('#monedas table').eq(1).html();
      _$ = cheerio.load(table);

      var usdBuy = _$('tr').eq(2).children('td').eq(1).text();
      var usdSale = _$('tr').eq(2).children('td').eq(2).text();
      var eurBuy = _$('tr').eq(3).children('td').eq(1).text();
      var eurSale = _$('tr').eq(3).children('td').eq(2).text();


      result.usd.buy = parseFloat(usdBuy);
      result.usd.sale = parseFloat(usdSale);

      result.eur.buy = parseFloat(eurBuy);
      result.eur.sale = parseFloat(eurSale);

      callback(null, result);
    }
  });
};

module.exports = ExchangeRate;
