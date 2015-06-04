# exchange-rates-banpro
Tipo de Cambio del Banco de la Producción (https://www.banpro.com.ni/)

## Install

    npm i exchange-rates-banpro

## Example

    var ExchangeRate = require('exchange-rates-banpro');
    var exchangeRate = new ExchangeRate();

    exchangeRate.get(function(err, result) {
      console.log(result)
    });

## Response

    {
      usd: {
        buy: 26.92,
        sale: 27.34
      },
      eur: {
        buy: 1.0925,
        sale: 1.1625
      }
    }
