var expect = require('chai').expect;

describe('making a post', function() {
	it('logs in and creates a new post', function() {
		var username = 'theneva';
		var password = '1234';

		var itemContent = 'Some random item';

		// go to homepage
		browser.get('http://localhost:3001');

		// click 'login'
		var loginLink = element(by.css('nav .login'));
		loginLink.click();

		// fill out and submit login form
		var usernameInput = element(by.model('username'));
		usernameInput.sendKeys(username);

		var passwordInput = element(by.model('password'));
		passwordInput.sendKeys(password);

		// Click the login button
		var loginButton = element(by.css('.button-login'));
		loginButton.click();

		// save a new item on the home page
		var nameInput = element(by.model('newItem.name'));
		nameInput.sendKeys(itemContent);

		var saveButton = element(by.css('.button-save'));
		saveButton.click();
		
		// the new item should be visible as the first item on the page
		element.all(by.repeater('item in items')).then(function(items) {
			var firstItem = items[0];
			firstItem.element(by.css('.item-name')).getText().then(function(firstItemName) {
				expect(firstItemName).to.equal(itemContent);
			});

			firstItem.element(by.css('.item-author')).getText().then(function(firstItemAuthor) {
				expect(firstItemAuthor).to.equal(username);
			});
		});
	});
});
