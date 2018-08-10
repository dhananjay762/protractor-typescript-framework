import {element, browser, by, protractor, $} from "protractor";
import * as assert from "assert";
const {Given, When, Then} = require("cucumber");

Given(/^Launch url$/, async()=>{
    browser.waitForAngularEnabled(false);
    await browser.get("http://juliemr.github.io/protractor-demo/");
});

When(/^Enter first number as "(.*?)"$/, async(num)=>{
    browser.driver.sleep(8000);
    var elmnt = element(by.model("first"));
    await elmnt.clear();
    await elmnt.sendKeys(num);
});

When(/^Enter second number as "(.*?)"$/, async(num)=>{
    var elmnt = element(by.model("second"));
    await elmnt.clear();
    await elmnt.sendKeys(num);
});

When(/^Select operation "(.*?)"$/, async(ope)=>{
    await element(by.model("operator")).all(by.cssContainingText('option', ope)).click();
});

Then(/^Click on go$/, async()=>{
    await element(by.id("gobutton")).click();
});

Then(/^Verify the result is "(.*?)"$/, async(exOp)=>{
    await element(by.className("ng-binding")).getText().then(function(text){
        if(text!=exOp){
            assert.fail("Actual op is diff from expected one...");
        }
    });
});