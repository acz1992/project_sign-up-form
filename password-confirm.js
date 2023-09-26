document.addEventListener("DOMContentLoaded", function () {
	const submitButton = document.querySelector("button");

	submitButton.addEventListener("click", function (e) {
		e.preventDefault();
		checkPassword();
	});

	function checkPassword() {
		const password = document.getElementById("password").value;
		const confirmPassword =
			document.getElementById("confirm-password").value;
		const message = document.getElementById("message");

		if (!password && !confirmPassword) {
			message.textContent = "Please enter matching passwords";
			message.style.color = "red";
		} else if (password === confirmPassword) {
			message.textContent = "Passwords match";
			message.style.color = "green";
		} else {
			message.textContent = "Passwords do not match";
			message.style.color = "red";
		}
	}
});
