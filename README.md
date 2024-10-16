## Description
    Simple wallet address validator for validating Bitcoin and other altcoins addresses in Node.js and browser.
    
## Installation
    `npm i crypto-address-validator-2 --save`

## How to use

```js

    var WAValidator = require('crypto-address-validator-2');

    var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
    if(valid)
        console.log('This is a valid address');
    else
        console.log('Address INVALID');

```

## Support

Happy to add more, and need any updates, do get in touch on my telegram over [@chigovera](https://t.me/chigovera)
