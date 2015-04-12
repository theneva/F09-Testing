describe('making a post', function() {
	it('logs in and creates a new post', function() {
		// go to homepage
		browser.get('http://localhost:3001');

		browser.pause();

		// click 'login'
		var loginLink = element(by.css('nav .login'));
		loginLink.click();

		// fill out and submit login form
		var usernameInput = element(by.model('username'));
		usernameInput.sendKeys('theneva');

		var passwordInput = element(by.model('password'));
		passwordInput.sendKeys('1234');

		// Click the login button
		var loginButton = element(by.css('.button-login'));
		loginButton.click();

		// save a new item on the home page
		var nameInput = element(by.model('newItem.name'));
		nameInput.sendKeys('Some random item');

		var saveButton = element(by.css('.button-save'));
		saveButton.click();
		
		// the new item should be visible as the first item on the page
	});
});
