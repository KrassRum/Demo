var loginBtn = document.querySelector('#loginBtn');
var logoutBtn = document.querySelector('#logOutBtn');
var loginPopup = document.querySelector('.login-popup');
var popup = `
	<div class="popup-overlay">
		<div class="popup">
			<form action="" name="loginForm">
				<label for="" class="username-label">Username</label>
				<input type="text" name="usernameInput">
				<br><br>
				<label for="" class="password-label">Password</label>
				<input type="password" name="passwordInput">
				<br><br>
				<button type="button" id="submitBtn">Login</button>
			</form>
		</div>
	</div>
`;

loginBtn.addEventListener('click', showLoginPopup);
logoutBtn.addEventListener('click', logout);

function showLoginPopup() {
	loginPopup.innerHTML = popup;
	loginPopup.style.display = 'flex';

	var submitBtn = document.querySelector('#submitBtn');
	submitBtn.addEventListener('click', login);
}

function login() {
	document.cookie = "login=true; path=/";
	hideLoginIfNoCookie();
	loginPopup.innerHTML = '';
	loginPopup.style.display = 'none';
}

function logout() {
	loginBtn.style.display = 'inline';
	logoutBtn.style.display = 'none';
	document.cookie = "login=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

function hideLoginIfNoCookie() {
	if (document.cookie) {
		loginBtn.style.display = 'none';
		logoutBtn.style.display = 'inline';
	}
}

hideLoginIfNoCookie();

// Change header styles based on scroll position:
var header = document.querySelector('.header-container');
window.addEventListener("scroll", function() {
	if (window.pageYOffset > 0) {
		header.classList.add('shrink');
	} else {
		header.classList.remove('shrink');
	}
});
