const {Before, After, BeforeStep} = require("@cucumber/cucumber");
const {browser} = require("protractor");
const DriverManager = require("../../test/util/driverManager")

Before(async function () {
    // Configuración y carga del navegador
    console.log("INGRESO A BEFORE");
    DriverManager.setup();
    await DriverManager.driver.get("http://localhost:8080/");
    //await DriverManager.driver.get("http://189.50.209.188");
});

After(async function () {
        // Finalización del navegador
    console.log("INGRESO A AFTER");
    await DriverManager.quit();
});

BeforeStep(async function (){
    const screenshot = await DriverManager.driver.takeScreenshot()
    this.attach((screenshot), {
        mediaType: 'base64:image/png'
    })
});
/*module.exports = {
    getDriver : () => DriverManager.driver,
};*/



