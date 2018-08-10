import {browser, protractor, Config} from "protractor";
import * as path from "path";

export const config: Config={

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities:{
        browserName:'chrome',
        chromeOptions:{
            useAutomationExtension:false,
        }
    },

    specs:[
        "../../features/test/Test1.feature",
    ],

    onPrepare:()=>{
        browser.ignoreSynchronization = false;
        browser.manage().window().maximize();
    },

    cucumberOpts:{
        compiler: "ts:ts-node/register",
        // format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/steps/*.js"],
        strict:true,
        // tags:"@tag"
    }


}