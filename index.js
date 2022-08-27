const asinArr = ["B09F9YQQ7B"]//,"B08B42LWKN","B07MNNH484","B09F6VHQXB","B097BFSP6X","B07BFBNFSF","B079R9W1B6","B07P7ZWQMZ","B07P7ZWQMZ","B0824ZFCDN","B081L3JP9V","B01N67G4HL","B0848RQKHH","B07RFSLNQ9","B096YL57LN","B09F696T22"]
const manager = require('./manager');
(async () => {
    try{
        await Promise.all(asinArr.map(manager))

    }
    catch(error){
        console.log(error)
    }

})();


// 4 M a b c d 
// http connection object http handshakes
// split array : 

// npm puppetter 