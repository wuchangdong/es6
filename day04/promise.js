/**
 * @file promise
 * @author: wuchangdong
 */
let Promise = require('./myPromise');


let p = new Promise(function (resolve, reject) {
    let num = Math.random() * 10;
    // setTimeout(function () {
        if (num > 5) {
            resolve(num);
        }
        else {
            reject('失败');
        }
    // }, 2000);
});
console.log(p);
p.then(res => {
    console.log(res);
}, rej => {
    console.log(rej);
});
console.log(p);