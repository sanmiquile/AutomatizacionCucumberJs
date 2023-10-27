//const {Builder, By} = require("selenium-webdriver");
const assert = require('assert');
//const { assert } = require("chai");
const { Given, When, Then } = require("@cucumber/cucumber");
const SignInDto = require("../../test/dto/signInDto");
const HomeBasePage = require("../../test/page/homeBasePage");
const SignInPage = require("../../test/page/signInPage");
const DataManager = require("../../test/util/dataManager")

Given('soy un usuario que ya esta registrado', async function () {
        console.log("INGRESO A soy un usuario que ya esta registrado");
        DataManager.signInDto = new SignInDto("sami", "1234");
});


When('accedo con mis credenciales de logueo', async function () {
        console.log("INGRESO A accedo con mis credenciales de logueo");

        DataManager.signInPage = new SignInPage();
        await DataManager.signInPage.signIn(DataManager.signInDto.name, DataManager.signInDto.password);
});

Then('debo estar en el Home', async function () {
        console.log("INGRESO A debo estar en el Home");

        DataManager.homeBasePage = new HomeBasePage();
        await DataManager.homeBasePage.isHomePageDisplayed().then(value => {
                assert.ok(value);
        });
});

