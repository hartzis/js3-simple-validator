var info = {
    Phone: {},
    BirthDate: {},
    PostalCode: {},
    State: {},
    Married: {}
};

var states = {
    AL: 1,
    AK: 1,
    AZ: 1,
    AR: 1,
    CA: 1,
    CO: 1,
    CT: 1,
    DE: 1,
    DC: 1,
    FL: 1,
    GA: 1,
    HI: 1,
    ID: 1,
    IL: 1,
    IN: 1,
    IA: 1,
    KS: 1,
    KY: 1,
    LA: 1,
    ME: 1,
    MD: 1,
    MA: 1,
    MI: 1,
    MN: 1,
    MS: 1,
    MO: 1,
    MT: 1,
    NE: 1,
    NV: 1,
    NH: 1,
    NJ: 1,
    NM: 1,
    NY: 1,
    NC: 1,
    ND: 1,
    OH: 1,
    OK: 1,
    OR: 1,
    PA: 1,
    RI: 1,
    SC: 1,
    SD: 1,
    TN: 1,
    TX: 1,
    UT: 1,
    VT: 1,
    VA: 1,
    WA: 1,
    WV: 1,
    WI: 1,
    WY: 1
};

console.log(info);

var isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

var promptInfo = function(infoObj, name) {
    var i = false;
    while (i === false) {
        var inputInfo = prompt('Please enter your ' + name);
        i = infoObj[name]['correct' + name](inputInfo);
    }
    return inputInfo
};

info.Phone.correctPhone = function(value) {
    if (value.length !== 12) {
        alert('Phone number must be xxx-xxx-xxxx');
        return false;
    } else if (value[3] === '-' && value[7] === '-') {
        return true;
    } else {
        alert('Phone number must be xxx-xxx-xxxx');
        return false;
    }
};

info.BirthDate.correctBirthDate = function(value) {
    if (value.length !== 8) {
        alert('Birth Date must be xx/xx/xx');
        return false;
    } else if (value[2] === '/' && value[5] === '/') {
        return true;
    } else {
        alert('Birth Date must be xx/xx/xx');
        return false;
    }
};

info.PostalCode.correctPostalCode = function(value) {
    if (value.length === 10 && value[5] === '-') {
        return true;
    } else if (value.length === 5) {
        return true;
    } else {
        alert('Postal code must be xxxxx or xxxxx-xxxx')
        return false;
    }
};

info.State.correctState = function(value) {
    if (states[value.toUpperCase()] === 1) {
        return true;
    } else {
        return false;
    }
};

info.Married.correctMarried = function(value) {
    if (value.toUpperCase() === 'YES' || value.toUpperCase() === 'NO') {
        return true;
    } else {
        alert('Married must be yes or no');
        return false;
    }
};

for (var key in info) {
    if (info.hasOwnProperty(key)) {
        console.log('doing ' + key);
        info[key][key] = promptInfo(info, key);
        console.log(info[key][key]);
    }
}