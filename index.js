var WAValidator = require('multicoin-address-validator');

function validate(_adddress, currencyid) {
      var currency = WAValidator.findCurrency(currencyid);
      if (currency)
            return WAValidator.validate(_adddress, currency);
      else {
            switch (currencyid.toString().toLowerCase().trim()) {
                  case 'near':
                        return validateImplicitAccountNear(_adddress) || validateNamedAccountNear(_adddress);
                  case 'xdc':
                  case 'xinfin':
                        return (_adddress.toLowerCase().indexOf("xdc") == 0) ? WAValidator.validate(_adddress.replace("xdc", "0x"), 'eth') : false;
                  default:
                        return false;
            }
      }
};
function validateNamedAccountNear(accountId) {
      const accountPattern = /^[a-z0-9-_]+(\.[a-z0-9-_]+)*$/;
      const maxLength = 64;
      if (accountId.length > maxLength) {
            return false;
      }
      return accountPattern.test(accountId);
}
function validateImplicitAccountNear(accountId) {
      const implicitAccountPattern = /^[0-9a-f]{64}$/;
      return implicitAccountPattern.test(accountId);
}
// console.log(validate("xdce50d5fc9bcbce037a19c860ba4105548d42517a0", "xdc"));
// console.log(validate("0xe50d5fc9bcbce037a19c860ba4105548d42517a0", "xdc"));
module.exports = { validate };
