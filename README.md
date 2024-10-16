## Description
    npm package for address conversion form various chains customized, Currently supported EVM chains, TRON, XINFIN, WELUPS Chains.
    
## Installation
    `npm i multicoin-address-validator2 --save`

## How to use

```js
    var WAValidator = require('multicoin-address-validator2');

    var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
    if(valid)
        console.log('This is a valid address');
    else
        console.log('Address INVALID');

```

## Support

Happy to add more, and need any updates, do get in touch on my telegram over [@chigovera](https://t.me/chigovera)