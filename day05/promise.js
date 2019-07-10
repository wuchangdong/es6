/**
 * @file promise
 * @author: wuchangdong
 */
let Promise = require('./myPromise');

let p = new Promise(function (resolve, reject) {
    let num = Math.random() * 10;
    console.log(num);
    setTimeout(function () {
        if (num > 5) {
            resolve('成功');
        }
        else {
            reject('失败');
        }
    }, 2000);
});
p.then(res => {
    console.log(res);
}, rej => {
    console.log(rej);
});