// Captcha
function cap() {
	var alpha = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"0",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
		"!",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"+",
	];
	var a = alpha[Math.floor(Math.random() * 71)];
	var b = alpha[Math.floor(Math.random() * 71)];
	var c = alpha[Math.floor(Math.random() * 71)];
	var d = alpha[Math.floor(Math.random() * 71)];
	var e = alpha[Math.floor(Math.random() * 71)];
	var f = alpha[Math.floor(Math.random() * 71)];

	var final = a + b + c + d + e + f;
	document.getElementById("capt").value = final;
}

//Form Validation
function validform() {
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var state = document.getElementById("inputState").value;
	var district = document.getElementById("inputDistrict").value;
	var stg1 = document.getElementById("capt").value;
	var stg2 = document.getElementById("matchCapt").value;

	if (
		fname == " " ||
		lname == " " ||
		email == " " ||
		phone == " " ||
		state == " " ||
		district == " " ||
		fname.length < 3 ||
		lname.length < 3 ||
		phone.length < 10
	) {
		alert("Please input valid values in all fields");
		return false;
	} else {
		if (stg1 == "") {
			alert("Please refresh captcha");
			return false;
		} else {
			if (stg1 == stg2) {
				alert("Form is validated Succesfully");
				localStorage.setItem("fname", fname);
				localStorage.setItem("lname", lname);
				location.replace("home.html");
				return true;
			} else {
				alert("Please enter a valid captcha");
				return false;
			}
		}
	}
}