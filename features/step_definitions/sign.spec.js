//const {Builder, By} = require("selenium-webdriver");
const assert = require('assert');
//const { assert } = require("chai");
const { Given, When, Then } = require("@cucumber/cucumber");
const SignInDto = require("../../test/dto/signInDto");
const HomeBasePage = require("../../test/page/homeBasePage");
const SignInPage = require("../../test/page/signInPage");
const DataManager = require("../../test/util/dataManager")

Given('soy un usuario que ya esta registrado', function () {
        DataManager.signInDto = new SignInDto("sami", "1234");
});


When('accedo con mis credenciales de logueo', function () {
        DataManager.signInPage = new SignInPage();
        DataManager.signInPage.signIn(DataManager.signInDto.name, DataManager.signInDto.password);
});

Then('debo estar en el Home', function () {
        DataManager.homeBasePage = new HomeBasePage();
        assert.ok(DataManager.homeBasePage.isHomePageDisplayed);
});

