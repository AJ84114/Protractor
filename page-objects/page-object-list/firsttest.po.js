"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HomePage {
    constructor() {
        this.heading = protractor_1.element(protractor_1.by.xpath('//*[@class=\'well hoverwell thumbnail\']/h2[contains(text(),\'Selenium Framework development\')]'));
    }
    open(page) {
        return protractor_1.browser.get(page);
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=firsttest.po.js.map