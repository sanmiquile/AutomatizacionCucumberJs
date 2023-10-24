const { Builder, By, until } = require("selenium-webdriver");
const DriverManager = require("../util/driverManager")
const WebDriverWait = require ("selenium-webdriver")

class BasePage {
    constructor() {
        this.driver = DriverManager.driver;
        //this.ewait = new (require('selenium-webdriver')).WebDriverWait(this.driver, 5000);
        this.driver.manage().setTimeouts({ implicit: 5000 });
    }

    findElement(locator) {
        return this.driver.findElement(locator);
    }

    findElements(locator) {
        return this.driver.findElements(locator);
    }

    getText(element) {
        return element.getText();
    }

    getTextBy(locator) {
        return this.driver.findElement(locator).getText();
    }

    type(inputText, locator) {
        this.driver.findElement(locator).clear();
        this.driver.findElement(locator).sendKeys(inputText);
    }

    async click(locator) {
        await this.driver.wait(until.elementIsEnabled(this.driver.findElement(locator)));
        await this.driver.findElement(locator).click();
    }

    isDisplayed(locator) {
        try {
            return this.driver.findElement(locator).isDisplayed();
        } catch (error) {
            return false;
        }
    }
}

module.exports = BasePage;