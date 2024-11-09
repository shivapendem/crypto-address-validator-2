var WAValidator = require('multicoin-address-validator');

function validate(_adddress, currencyid) {
      if (isEmptyOrNull(currencyid) || isEmptyOrNull(_adddress)) {
            return false;
      }
      var currency = WAValidator.findCurrency(currencyid);
      if (currency)
            return WAValidator.validate(_adddress, currencyid);
      else {
            switch (currencyid.toString().toLowerCase().trim()) {
                  case 'near':
                        return validateImplicitAccountNear(_adddress) || validateNamedAccountNear(_adddress);
                  case 'diamante':
                  case 'diam':
                        return validateNamedAccountDiamante(_adddress);
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
function validateNamedAccountDiamante(accountId) {
      const accountPattern = /^G[A-Z2-7]{55}$/;
      return accountPattern.test(accountId);
}
function isEmptyOrNull(data) {
      return isEmpty(data) ? isEmpty(data) : isNull(data);
};
function isEmpty(string) {
      if (isNull(string)) return true;
      else if ((typeof string) == "object") { return Object.keys(string).length == 0 ? true : false; }
      else if ((typeof string) == "boolean") return false;
      else if ((typeof string) == "number") return false;
      else if (Array.isArray(string)) { string.length == 0 ? true : false; }
      else if (string.trim() === "") return true;
      else return false;
};
function isNull(data) {
      if ((data === null) || (typeof data === 'undefined')) {
            return true;
      }
      return false;
}
module.exports = { validate };
