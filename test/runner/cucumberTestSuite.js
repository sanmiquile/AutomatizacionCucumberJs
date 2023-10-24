const { setWorldConstructor, setDefaultTimeout, Before, After } = require('cucumber');
const { Builder, By } = require("selenium-webdriver");

setDefaultTimeout(60 * 1000);

let driver;

Before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
    if (driver) {
        await driver.quit();
    }
});


setWorldConstructor(function ({ attach, parameters }) {
    this.driver = driver; // Comparte el controlador entre pasos de prueba
    this.attach = attach; // Proporciona funciones para adjuntar datos a informes
    this.parameters = parameters; // Proporciona acceso a los parámetros de configuración
});