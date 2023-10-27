//const {Builder, By} = require("selenium-webdriver");
const assert = require('assert');
//const { assert } = require("chai");
const { Given, When, Then } = require("@cucumber/cucumber");
const RegisterDto = require("../../test/dto/registerDto");
const RegisterPage = require("../../test/page/registerPage");
const DataManager = require("../../test/util/dataManager")
const { faker } = require('@faker-js/faker');
Given('soy un usuario no registrado', async function () {
    const nameAll = faker.person.fullName();
    const username = faker.internet.userName()
    const password = faker.internet.password();
    DataManager.registerDto = new RegisterDto(nameAll, username, password, password);
});

When('ingreso mis datos de afiliacion y me registro', async function () {
    DataManager.registerPage = new RegisterPage();
    await DataManager.registerPage.register(DataManager.registerDto.nameAll, DataManager.registerDto.username, DataManager.registerDto.password, DataManager.registerDto.password);

});

    Then('muestra mensaje de {string}', async function (string) {
        DataManager.registerPage = new RegisterPage();

        const messageElement = await DataManager.registerPage.RegisterMessage()
        console.log("OJOimprimer messageElemente",  messageElement);
        assert.equal(messageElement,string);
        //assert.strictEqual(messageElement, "Operación completada");

    });

Given('soy un usuario registrado en SMS', async function () {
    const nameAll = "Sandra Milena Quintero Leal";
    const username = "sami"
    const password = "1234"
    DataManager.registerDto = new RegisterDto(nameAll, username, password, password);
});

