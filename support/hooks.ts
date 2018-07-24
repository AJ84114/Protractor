import { browser } from 'protractor';
import { CallbackStepDefinition, defineSupportCode, Hooks, StepDefinitions, AfterAll, After, Status, BeforeAll } from 'cucumber';
import { async } from 'q';
//import { CucumberReporting } from '../Reporting/CucumberReporting';

//import {config} from "../steps/config";
//import {JsonFormatter} from "../reporting/CucumberReportExtension";

//const jsonDir = "I:/Personal/ProtractorSample-master/ProtractorSample-master/EACourseApp/EACourseApp/e2e/steps-definitions/reports/json";
BeforeAll(async () => {
  
  //CucumberReporting.createReportFile(jsonDir);
  console.log("Starting the Application!");
});

AfterAll(async () => {
  console.log("Closing the Application");
});

/*
After('StepResult', async (Scenario) => {
  console.log("Executing after feature to take screenshot!!");
  if (Scenario.result.status == Status.FAILED) {
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }

});

*/

defineSupportCode(({ Before, setDefaultTimeout }: StepDefinitions & Hooks) => {
  const DEFAULT_PAGE_LOAD_TIMEOUT_SECONDS: number = 100 * 1000;
  const BEFORE_FEATURE_TIMEOUT: number = 5 * 1000;
  setDefaultTimeout(DEFAULT_PAGE_LOAD_TIMEOUT_SECONDS);
  Before((event: any, callback: CallbackStepDefinition) => {
    setTimeout(callback, BEFORE_FEATURE_TIMEOUT);
  });
});
