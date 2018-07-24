"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const firsttest_po_1 = require("../../page-objects/page-object-list/firsttest.po");
const cucumber_1 = require("cucumber");
//const chai = require('chai').use(require('chai-as-promised'));
//const expect = chai.expect;
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    const homepage = new firsttest_po_1.HomePage();
    Given('Open First Page of Application.', () => {
        homepage.open(protractor_1.browser.params.EAUrl);
    });
    Then('Get the heading', () => {
        homepage.heading.getText().then((text) => {
            console.log("The heading is :" + text);
        });
    });
    Then('Click on the first heading', () => {
        return homepage.heading.click();
    });
});
//# sourceMappingURL=firsttest.steps.js.map