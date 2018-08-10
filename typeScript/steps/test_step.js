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
const protractor_1 = require("protractor");
const assert = require("assert");
const { Given, When, Then } = require("cucumber");
Given(/^Launch url$/, () => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
}));
When(/^Enter first number as "(.*?)"$/, (num) => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.driver.sleep(8000);
    var elmnt = protractor_1.element(protractor_1.by.model("first"));
    yield elmnt.clear();
    yield elmnt.sendKeys(num);
}));
When(/^Enter second number as "(.*?)"$/, (num) => __awaiter(this, void 0, void 0, function* () {
    var elmnt = protractor_1.element(protractor_1.by.model("second"));
    yield elmnt.clear();
    yield elmnt.sendKeys(num);
}));
When(/^Select operation "(.*?)"$/, (ope) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.model("operator")).all(protractor_1.by.cssContainingText('option', ope)).click();
}));
Then(/^Click on go$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.id("gobutton")).click();
}));
Then(/^Verify the result is "(.*?)"$/, (exOp) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.className("ng-binding")).getText().then(function (text) {
        if (text != exOp) {
            assert.fail("Actual op is diff from expected one...");
        }
    });
}));
