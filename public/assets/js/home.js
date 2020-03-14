const $setLogin = $("#login");
const $setSignUp = $("#signup");
const $submitButton = $("#submit");

let authSetting = "login";

function setAuth(setting) {
	authSetting = setting;

	if (authSetting === "login") {
		$setLogin.addClass("active");
		$setSignUp.removeClass("active");

		$setLogin.addClass("shadow");
		$setSignUp.removeClass("shadow");

		$submitButton.text("Log In");
	} else {
		$setSignUp.addClass("active");
		$setLogin.removeClass("active");

		$setSignUp.addClass("shadow");
		$setLogin.removeClass("shadow");

		$submitButton.text("Sign Up");
	}
}

$setLogin.on("click", setAuth.bind(null, "login"));
$setSignUp.on("click", setAuth.bind(null, "signup"));
