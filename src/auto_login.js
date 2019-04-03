const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
module.exports={
    login:async(id,pwd,cb)=>{
        browser = await puppeteer.launch({
            // executablePath: 'D:/tool/chrome-win/chrome.exe',
            headless:false
        });
        const page = await browser.newPage();
        await page.goto("http://bizr.tendata.com/user/current");
        var  url = page._target._targetInfo.url;
        await page.type('#username',id);
        await page.type('#_tip',pwd);
        browser.on("targetchanged",async (obj)=>{

            var page =await obj.page();
            var cookie = await page.cookies("http://bizr.tendata.com");
            var current =page._target._targetInfo.url;
            console.log(cookie);
            if(current === "http://bizr.tendata.com/user/current")   cb(cookie);
        })
    }
};