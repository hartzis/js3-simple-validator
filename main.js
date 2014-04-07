info = {
    Phone: {},
    BirthDate: {},
    PostalCode: {},
    State: {},
    Married: {}
};

console.log(info);

var promptInfo = function(infoObj, name) {
    var i = false;
    while (i === false) {
        var inputInfo = prompt('Please enter your ' + name);
        i = infoObj[name]['correct' + name](inputInfo);
    }
    return inputInfo
}

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
}

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
}

info.PostalCode.correctPostalCode = function(value) {
    if (value.length === 10 && value[5] === '-') {
        return true;
    } else if (value.length === 5) {
        return true;
    } else {
        alert('Postal code must be xxxxx or xxxxx-xxxx')
        return false;
    }
}

info.State.correctState = function(value) {
    if (value.length !== 2) {
        alert('State must be the two state capital abbreviatin(ex: CO)');
        return false;
    } else if (value === value.toUpperCase()) {
        return true;
    } else {
        alert('State must be the two state capital abbreviatin(ex: CO)');
        return false;
    }
}

info.Married.correctMarried = function(value) {
    if (value.toUpperCase() === 'YES' || value.toUpperCase() === 'NO') {
        return true;
    } else {
        alert('Married must be yes or no');
        return false;
    }
}

for (var key in info) {
    if (info.hasOwnProperty(key)) {
        console.log('doing ' + key);
        info[key][key] = promptInfo(info, key);
        console.log(info[key][key]);
    }
}