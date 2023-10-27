const { By } = require("selenium-webdriver");
const BasePage = require('./basePage');

class SignInPage extends BasePage {
    constructor() {
        super();
    }

    get userLocator() {
        return By.name("nombreUsuario");
    }

    get passLocator() {
        return By.id("clave");
    }

    get signInBtnLocator() {
        return By.xpath("//span[@class='ui-button-text ui-c' and text()='Ingresar']");
    }

    get message() {
        return By.xpath("//div[@id='content']/span[contains(text(),'No tiene permiso para acceder a este recurso')]");
    }

    async signIn(name, password) {
        await this.type(name, this.userLocator);
        await this.type(password, this.passLocator);
        await this.click(this.signInBtnLocator);
    }

    async getSignInMessage() {
        await this.wait().until(() => this.driver.findElement(this.message).isDisplayed());
        return await this.getText(this.message);
    }
}

module.exports = SignInPage;