const { By } = require("selenium-webdriver");
const BasePage = require('./basePage');

class RegisterPage extends BasePage {
    constructor() {
        super();
    }

    get registerBtnLocator() {
        return By.xpath("//span[text()='Registrarse']");
    }

    get userNameCompleteLocator() {
        return By.name("registro:nombre");
    }

    get usernameLocator() {
        return By.id("registro:nombreUsuario");
    }

    get passwordLocator() {
        return By.id("registro:clave");
    }

    get confirmPasswordLocator() {
        return By.name("registro:verificacionClave");
    }

    get acceptBtnLocator() {
        return By.xpath("//span[text()='Aceptar']");
    }

    get messageRegister() {
        return By.xpath("//div[@class='ui-growl-message']/span[@class='ui-growl-title']");
    }

    async register(nameAll, username, password, confirmPass) {

        await this.click(this.registerBtnLocator);
        await this.type(nameAll, this.userNameCompleteLocator);
        await this.type(username, this.usernameLocator);
        await this.type(password, this.passwordLocator);
        await this.type(confirmPass, this.confirmPasswordLocator);
        await this.click(this.acceptBtnLocator);
    }

    /*public String registerMessage() {
        // WaitforVisibleElement
        getEwait().until(ExpectedConditions.visibilityOfAllElementsLocatedBy(messageRegister));
        // Se manda el elemento para obtener el texto
        return getText(messageRegister);*/

    async RegisterMessage() {

            const messageElement = await this.driver.findElement(this.messageRegister);
            const messageText = await messageElement.getText();
            console.log("OJO messageElemente",  messageElement);
            return messageText;


    };
}
module.exports = RegisterPage;

