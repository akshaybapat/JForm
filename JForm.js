/*=====================================================
*
*	JForm : Smart Form JavaScript Library
*	(c) Akshay Bapat
*
======================================================*/

/*	JForm Object Constructor
========================*/

(function(){

function JForm() {

	 if(this === window){ 

	 //if *this* is the window object, start over with a *new* object

      return new JForm();
   }

   return this;

};

/*	JForm Prototype Functions
============================*/

JForm.prototype = {

	//Define any property for the form along with its value

	set: function (property,value) {
				this.property = value;
				return this;
			},

	//Validate the properties defined for the current form

	validate: function(property,value){

	var result = false;

	switch(property)
	{
	case "username": 
				var ck_username = new RegExp("^[a-z0-9_-]{3,16}$");
				result = ck_username.test(value);
				break;

	case "email": 
				var ck_email = new RegExp("^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$");
				result = ck_email.test(value);
				break;

	case "ssn": 
				var ck_ssn = new RegExp("^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$");
				result = ck_ssn.test(value);
				break;

	case "phone": 
				var ck_phone = new RegExp("^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$");
				result =  ck_phone.test(value);
				break;

	case "url": 
				var ck_url = new RegExp("^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$");
				result = ck_url.test(value);
				break;
	
	case "password" : 
				var ck_password = new RegExp("^[a-z0-9_-]{6,18}$");
				result =  ck_password.test(value);
				break;
	
	case "DOB": 
				var ck_dob= new RegExp("^(((((((0?[13578])|(1[02]))[\.\-/]?((0?[1-9])|([12]\d)|(3[01])))|(((0?[469])|(11))[\.\-/]?((0?[1-9])|([12]\d)|(30)))|((0?2)[\.\-/]?((0?[1-9])|(1\d)|(2[0-8]))))[\.\-/]?(((19)|(20))?([\d][\d]))))|((0?2)[\.\-/]?(29)[\.\-/]?(((19)|(20))?(([02468][048])|([13579][26])))))$");
				result = ck_dob.test(value);
				break;

	case "DateTime": 
				var ck_dateTime = new RegExp("^(?ni:(?=\d)((?'year'((1[6-9])|([2-9]\d))\d\d)(?'sep'[/.-])(?'month'0?[1-9]|1[012])\2(?'day'((?<!(\2((0?[2469])|11)\2))31)|(?<!\2(0?2)\2)(29|30)|((?<=((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(16|[2468][048]|[3579][26])00)\2\3\2)29)|((0?[1-9])|(1\d)|(2[0-8])))(?:(?=\x20\d)\x20|$))?((?<time>((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2}))?)$");
				result = ck_dateTime.test(value);
				break;

	case "CreditCard": 
				var ck_creditcard = new RegExp("^((4\d{3})|(5[1-5]\d{2}))(-?|\040?)(\d{4}(-?|\040?)){3}|^(3[4,7]\d{2})(-?|\040?)\d{6}(-?|\040?)\d{5}");
				result = ck_creditcard.test(value);
				break;

	default: console.log("Undefined Property!");
	}

	return result;

	},


	checkPasswordStrength: function (passwordDiv, passwordStrengthDiv) {
		var strength = document.getElementById(passwordStrengthDiv);
		var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$", "g");
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		var enoughRegex = new RegExp("(?=.{6,}).*", "g");
		var pwd = document.getElementById(passwordDiv);
			if (pwd.value.length==0) {
			strength.innerHTML = ‘Type Password’;
			} else if (false == enoughRegex.test(pwd.value)) {
			strength.innerHTML = ‘More Characters’;
			} else if (strongRegex.test(pwd.value)) {
			strength.innerHTML = ‘<span style="color:green">Strong!</span>’;
			} else if (mediumRegex.test(pwd.value)) {
			strength.innerHTML = ‘<span style="color:orange">Medium!</span>’;
			} else {
			strength.innerHTML = ‘<span style="color:red">Weak!</span>’;
			}
		},


	checkLocalStorage: function (){
    	try {
        	return 'localStorage' in window && window['localStorage'] !== null;
    	} catch(e) {
        	return false;
    	}
		},

	toJSONString: function (object) {
			var JSON = JSON.stringify(object);
			return JSON;
			},			

	readFromJSONString: function (json) {
			var object = JSON.parse(json);
			return object;
			},

	saveToLocalStorage: function(key, value){
			if ('localStorage' in window && window['localStorage'] !== null)
				localStorage.setItem(key, JSON.stringify(value));
			else
				console.log("No LocalStorage Available!");
			},

	readFromLocalStorage: function (item) {
			var object = JSON.parse(localStorage.getItem(item));
			return object;
			},

	saveToSessionStorage: function(key, value){
			if ('sessionStorage' in window && window['sessionStorage'] !== null)
				sessionStorage.setItem(key, JSON.stringify(value));
			else
				console.log("No SessionStorage Available!");
			},

	readFromSessionStorage: function (item) {
			var object = JSON.parse(sessionStorage.getItem(item));
			return object;
			},

	createOnlineHandler: function(messageDiv){
			window.addEventListener("online",function(){
				document.getElementById(messageDiv).innerHTML = "You are Online!";
			})
		},

	createOfflineHandler: function(messageDiv){
			window.addEventListener("offline",function(){
				document.getElementById(messageDiv).innerHTML = "You are Offline!";
			})
		};	


		//Instantiate new JForm Object so as to enable direct implementation in its calling JS File.

		if (typeof window === "object" && typeof window.document === "object") {
			window.JForm = JForm
			window.JForm = new JForm();
		}


	};

})();//Immediately Invoking Function Expression (IIFE)
