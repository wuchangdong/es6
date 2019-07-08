/**
 * @file myPromise
 * @author: wuchangdong
 */


function Promise(task) {
    let that = this; // 缓存this
    that.status = 'pending'; // 默认状态
    that.value = undefined; // 返回的值
    that.onResolvedCallbacks = []; // 存放所有成功的回调函数
    that.onRejectdCallbacks = []; // 存放所有失败的回调函数

    function resolve(value) {
        if (that.status === 'pending') {
            that.status = 'fulfilled';
            that.value = value;
            that.onResolvedCallbacks.forEach(item => item(that.value));
        }
    }

    function reject(reason) {
        if (that.status === 'pending') {
            that.status = 'rejected';
            that.value = reason;
            that.onResolvedCallbacks.forEach(item => item(that.value));
        }
    }

    try {
        task(resolve, reject);
    }
    catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onFulfilled, onReject) {
    let that = this;
    if (that.status === 'fulfilled') {
        onFulfilled();
    }
    if (that.status === 'rejected') {
        onReject();
    }
    if (that.status === 'pending') {
        that.onResolvedCallbacks.push(onFulfilled);
        that.onRejectdCallbacks.push(onReject);
    }
};

module.exports = Promise;