Array.prototype.filter = function (fn) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i]);
        flag && newArr.push(this[i]);
    }
    return newArr;
}

let arr1 = new Array(3);
arr1.fill(1); // 数组填充
console.log(arr1); // [ 1, 1, 1 ]

Array.prototype.find = function (fn) {
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i]);
        if (flag) {
            return this[i];
        }
    }
}

Array.prototype.findIndex = function (fn) {
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i]);
        if (flag) {
            return i;
        }
    }
}

Array.prototype.some = function (fn) {
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i]);
        if (flag) {
            return flag;
        }
    }
};
Array.prototype.every = function (fn) {
    for (let i = 0; i < this.length; i++) {
        let flag = fn(this[i]);
        if (!flag) {
            return false;
        }
    }
};
function print() {
    let arr = Array.prototype.slice.call(arguments);
    console.log(arr);
    // 类数组转为正常数组
    arr = Array.form(arguments);
    console.log(arr);
}
print(1, 3, 2, 4);

