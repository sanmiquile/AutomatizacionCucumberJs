const { By, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
class HomeBasePage extends BasePage {
    constructor() {
        super();
    }

    get goOutLocator() {
        return By.xpath("//span[@class='ui-button-text ui-c' and text()='Salir']");
    }

    get menuLocator() {
        return By.xpath("//span[@class='ui-button-icon-left ui-icon ui-c pi pi-bars']");
    }

    get devolverLocator() {
        return By.xpath("//span[@class='ui-button-icon-left ui-icon ui-c pi pi-arrow-circle-left']");
    }

    get adelantarLocator() {
        return By.xpath("//span[@class='ui-button-icon-left ui-icon ui-c pi pi-arrow-circle-right']");
    }

    get titleAppLocator() {
        return By.id("tituloApp");
    }

    async isHomePageDisplayed() {
        const locators = [this.goOutLocator, this.menuLocator, this.devolverLocator, this.adelantarLocator];
        return locators.some(locator => this.isDisplayed(locator));
    }

    async getTitleApp() {
        // Esperar a que el elemento sea visible
        await this.driver.wait(until.elementIsVisible(this.driver.findElement(this.titleAppLocator)));
        // Obtener el texto del elemento
        return await this.getText(this.titleAppLocator);
    }

    async goStep(title) {
        const newStep = `//span[@class='ui-steps-title' and text()='${title}']`;
        console.log(newStep);
        await this.click(By.xpath(newStep));
    }
}

module.exports = HomeBasePage;