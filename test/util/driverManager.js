const {Builder} = require("selenium-webdriver");

class DriverManager {

    constructor() {
        if (DriverManager.instance) {
            return DriverManager.instance;
        }
        this.driver = null;
        DriverManager.instance = this;
    }

    getDriver() {
        return this.driver;
    }

    setDriver(driver) {
        this.driver = driver;
    }

    setup(){
        this.driver = new Builder().forBrowser('chrome').build();
    }

    quit(){
        this.driver.quit();
    }

}

module.exports = new DriverManager();