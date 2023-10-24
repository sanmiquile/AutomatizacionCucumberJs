const { Before, After } = require("@cucumber/cucumber");
const { browser } = require("protractor");
const DriverManager = require("../../test/util/driverManager")

class Hook {
    constructor() {
        if (Hook.instance) {
            return Hook.instance;
        }
            Hook.instance = this;
        Before( this.setUpDriver );
        After( this.tearDown )
    }

    async setUpDriver() {
        // Configuración y carga del navegador
        DriverManager.setup();
        //wait DriverManager.driver.get("http://localhost:8080/");
        await DriverManager.driver.get("http://189.50.209.188");
    }

    async tearDown() {
        // Finalización del navegador
        await DriverManager.driver.quit();
    }
}

module.exports = new Hook();