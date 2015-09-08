/**
 * Created by xy on 15/4/16.
 */

let Validator = {};

const PATTERN = {
    EMAIL: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
    URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    HEX: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
    NUM: /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/,
    IDCARD: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i,
    CNMOBILE: /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
};

Validator.isNotEmpty = (value) => {
    return !!value && (value.length !== 0)
}

Validator.isNum = (value) => {
    return PATTERN.NUM.test(value);
}

Validator.isInt = (value) => {
    return Validator.isNum(value) && parseInt(value) === value;
};

Validator.isDecimal = (value) => {
    return Validator.isNum(value) && !Validator.isInt(value);
};

Validator.isArray = (value) => {
    return Array.isArray(value);
};

Validator.isRegExp = (value) => {
    if (value instanceof RegExp) {
        return true;
    }
    try {
        return !!new RegExp(value);
    } catch (e) {
        return false;
    }
};

Validator.isObject = (value) => {
    return typeof(value) === 'object' && !Validator.isArray(value);
};

Validator.isFunc = (value) => {
    return typeof(value) === 'function';
};

Validator.isEmail = (value) => {
    return typeof(value) === 'string' && PATTERN.EMAIL.test(value);
};

Validator.isUrl = (value) => {
    return typeof(value) === 'string' && PATTERN.URL.test(value);
};

Validator.isHex = (value) => {
    return typeof(value) === 'string' && PATTERN.HEX.test(value);
};

Validator.isIdCard = (value) => {
    return typeof(value) === 'string' && PATTERN.IDCARD.test(value);
};

Validator.isCNMobile = (value) => {
    return typeof(value) === 'string' && PATTERN.CNMOBILE.test(value);
};
module.exports = Validator;