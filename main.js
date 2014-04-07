// var userInput = prompt('Please enter phone number(xxx-xxx-xxxx)\nThis will not be used for spam, just verification!');

// var correctPhone = (userInput[3] === '-') && (userInput[7] === '-');

// console.log(correctPhone);

// alert(correctPhone);

info = {Phone: {}, BirthDate: {}, PostalCode: {}, State: {}, Married: {}};

console.log(info);

// for (var i = 1; i <= 5; i++) {
// 	console.log(i);
// }

var promptInfo = function(name) {
	var i = false;
	while (i === false){
		// return prompt('Please enter your ' + name );
		i = true;
	}
}

info.Phone.correctPhone = function(value){
	if (value.length !== 12) {
		return false
	}
	else if (value[3] === '-' && value[7] === '-') {
		return true
	}
	else {
		return false
	}
}

info.BirthDate.correctBirthDate = function(value) {
	if (value.length !== 8) {
		return false;
	}
	else if (value[2] === '/' && value[5] === '/') {
		return true;
	}
	else {
		return false;
	}
}

info.PostalCode.correctPostalCode = function(value){
	if (value.length === 10 && value[5] === '-') {
		return true;
	}
	else if (value.length === 5) {
		return true;
	}
	else {
		return false;
	}
}

info.State.correctState = function(value){
	if (value.length !== 2){
		return false;
	}
	else if (value === value.toUpperCase()){
		return true;
	}
	else {
		return false;
	}
}

info.Married.correctMarried = function(value){
	if (value.toUpperCase()==='YES' || value.toUpperCase()==='NO'){
		return true
	}
	else {
		return false
	}
}

// for (var key in info) {
// 	if (info.hasOwnProperty(key)) {
// 		console.log('doing '+key)
// 		info[key] = promptInfo(key);
// 		console.log(info[key])
// 	}
// }

// for (var key in info) {
// 	if (info.hasOwnProperty(key)) {
// 		console.log(key + "->" + info[key])
// 	}
// }