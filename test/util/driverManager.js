const {Builder, WebDriver, Capabilities} = require("selenium-webdriver");

class DriverManager {
    constructor() {
        console.log("CONSTRUYENDO DRIVER MANAGER")
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
      //  if (this.driver ==null){
        const capabilities = Capabilities.chrome();
        capabilities.set('chromeOptions', { "w3c": false , "pageLoadStrategy":"normal"});
        capabilities.set('pageLoadStrategy','normal');
        capabilities.setPageLoadStrategy('normal');
        this.driver = new Builder().forBrowser('chrome').withCapabilities(capabilities ).build();
      //  }
    }
    async quit(){
        await this.driver.quit();
    }

}

module.exports = new DriverManager();