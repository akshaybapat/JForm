JForm
=====

An Open Source JavaScript Library to enable Smart HTML Form Validation

Usage
=====

1. Validate Form Fields

	JForm(property, value);

		e.g. JForm("password","sl$ne3krn"); // returns true
	
		e.g. JForm("email","aks@."); // returns false

2. Check Password Strength

	JForm.checkPasswordStrength(passwordDiv,passwordStrengthDiv)

		e.g. checkPasswordStrength("#passwordField","#passwordStrengthField");

3. Save to LocalStorage / Session Storage

	JForm.saveToLocalStorage(key,value);
	
	JForm.saveToSessionStorage(key,value);

		e.g. var UserObject = {}

		     JForm.saveToLocalStorage(1234,UserObject)
	
		     JForm.saveToSessionStorage(1234,UserObject)

4. Read from LoaclStorage / Session Storage

	JForm.readFromLocalStorage(key);
	
		e.g. var UserObject = JForm.readFromLocalStorage(1234);
	
	JForm.readFromSessionStorage(key);
	
		e.g. var UserObject = JForm.readFromSessionStorage(1234);


5. Add Online / Offline Listener Events

	JForm.createOnlineHandler(onlineMessageDiv);

	JForm.createOfflineHandler(onlineMessageDiv);


