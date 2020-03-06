const Helper = require('../../helper/main.js')

const CONSTRUCTOR_SPINNER = "//div[@id='constructor-spinner']//div[@class='kuc-spinner']//div[@class='kuc-loader']";
const SHOW_BUTTON_SPINNER = "//button[contains(text(),'Show Spinner')]";
const HIDE_BUTTON_SPINNER = "//button[contains(text(),'Hide Spinner')]";

describe('kintoneUIComponent - Spinner', function () {
    it('[Spinner-2] Verify that operation of spinner and the UI is the same as spec', function () {
        Helper.ElementHandler
            .verifyElementNotDisplayed(CONSTRUCTOR_SPINNER)
            .click(SHOW_BUTTON_SPINNER)
            .verifyElementDisplayed(CONSTRUCTOR_SPINNER)
            .verifyElementColor(CONSTRUCTOR_SPINNER, 'color', '#333333')
            .verifyElementPosition(CONSTRUCTOR_SPINNER, 'position', 'static')
            .click(HIDE_BUTTON_SPINNER)
    });
    // it('[Spinner-3] Verify that can create a Spinner successfully without any parameters', function () {
    //     $(XPATH_SPINNER_DISLAY_BUTTON).click()
    //     let spinnerExist = browser.isExisting(XPATH_SPINNER);
    //     expect(spinnerExist).to.equal(true);
    //     $(XPATH_SPINNER_NON_DISLAY_BUTTON).click()
    // });
});
