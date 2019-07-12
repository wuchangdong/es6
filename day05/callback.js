/**
 * @file callback
 * @author wuchangdong
 */
const fs = require('fs');
fs.readFile('./1.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});

// 通过事件发布订阅来实现

const EventEmitter = require('events');
let eve = new EventEmitter();
