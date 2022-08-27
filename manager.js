const {Worker, isMainThread, parentPort, workerData, threadId} = require('worker_threads');
const { chromium } = require("playwright");

if (isMainThread) {
module.exports = (asin) => {
    return new Promise( (resolve, reject) => {
        // console.log(asin)
        const worker = new Worker(__filename, {
            workerData: asin
        });
        worker.on('message', resolve);
        worker.on('error', reject);
        console.log(__filename)
        worker.on('exit', (code) => {
        if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
}
}else {
    console.log(`${threadId} Starting ${workerData}`);
    (async () => {
        try{
            const asin = workerData
            let url = `https://www.amazon.in/dp/${asin}/`;
            
            var t0 = Date.now();

            let browser = await chromium.launch();
            // let page = await browser.newPage();
            await page.setViewportSize({ width: 1280, height: 1080 });
            await page.goto(url);
            await page.screenshot({ path: `./images/${asin}.jpeg` });
            
            var t1 = Date.now();
            
            console.log(`Call to screenshot took ${t1 - t0} milliseconds.`);
            await browser.close();
        }catch(Error){
            console.log('ss not working')
        }
    console.log(`${threadId} Ending ${workerData}`);
    parentPort.postMessage(workerData);  
    })();
}
