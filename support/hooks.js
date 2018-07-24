"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
//import { CucumberReporting } from '../Reporting/CucumberReporting';
//import {config} from "../steps/config";
//import {JsonFormatter} from "../reporting/CucumberReportExtension";
//const jsonDir = "I:/Personal/ProtractorSample-master/ProtractorSample-master/EACourseApp/EACourseApp/e2e/steps-definitions/reports/json";
cucumber_1.BeforeAll(() => __awaiter(this, void 0, void 0, function* () {
    //CucumberReporting.createReportFile(jsonDir);
    console.log("Starting the Application!");
}));
cucumber_1.AfterAll(() => __awaiter(this, void 0, void 0, function* () {
    console.log("Closing the Application");
}));
/*
After('StepResult', async (Scenario) => {
  console.log("Executing after feature to take screenshot!!");
  if (Scenario.result.status == Status.FAILED) {
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }

});

*/
cucumber_1.defineSupportCode(({ Before, setDefaultTimeout }) => {
    const DEFAULT_PAGE_LOAD_TIMEOUT_SECONDS = 100 * 1000;
    const BEFORE_FEATURE_TIMEOUT = 5 * 1000;
    setDefaultTimeout(DEFAULT_PAGE_LOAD_TIMEOUT_SECONDS);
    Before((event, callback) => {
        setTimeout(callback, BEFORE_FEATURE_TIMEOUT);
    });
});
//# sourceMappingURL=hooks.js.map