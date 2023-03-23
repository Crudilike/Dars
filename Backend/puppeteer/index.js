const puppeteer = require("puppeteer");
    //await page.screenshot({path: "img.png"})
    //await browser.close();
(async() => {
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    await page.goto("https://www.youtube.com/@nostaranimation")
    let idPage = await page.avaluate(() => {
        let text = document.querySelector("#video-title").innerText;
        return text;
    })   
    console.log(idPage);
    await browser.close();
})();



