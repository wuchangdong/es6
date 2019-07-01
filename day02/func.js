/**
 * @file: function
 * @author: wuchangdong
 */

function ajax(url = new Error('url不能为空'), method = 'GET', dataType = 'json') {
    console.log(url);
    console.log(method);
    console.log(dataType);

}
// function ajax() {
//     var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Error('url不能为空');
//     var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
//     var dataType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'json';
//     console.log(url);
//     console.log(method);
//     console.log(dataType);
//   }
ajax('/111');

function sum(prefix, ...rest) {
    let result = 0;
    result = rest.reduce((sum, item) => sum + item, 0);
    // 从右往左算
    // result = rest.reduceRight((sum, item) => sum + item, 0);
    console.log(result);
    return (prefix + result);
}

console.log(sum(1, 2, 3, 4, 5));

// 自己实现reduce
Array.prototype.reduce = function (reduce, initialval) {
    for (var i = 0; i < this.length; i++) {
        initialval = reduce(initialval, this[i], i, this);
    }
    return initialval;
};

// 展开运算符
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [].concat(arr1, arr2);
let arr4 = [...arr1, ...arr2];

let max = Math.max.apply(null, arr2);
let max2 = Math.max(...arr2);

let obj1 = {
    name: '1'
};
let obj2 = {
    age: 2
};
let obj3 = {
    ...obj1,
    ...obj2
};
for (let key in obj1) {
    obj3[key] = obj1[key];
}
Object.assign(obj3, obj2, obj1);

// 深拷贝
let obj5 = {
    name: '222',
    home: {
        city: 'beijing'
    }
};
let obj6 = JSON.parse(JSON.stringify(obj5));
function clone(origin) {
    let newObj = {};
    for (let key in origin) {
        if (typeof origin[key] === 'object') {
            newObj[key] = clone(origin[key]);
        }
        else {
            newObj[key] = origin[key];
        }
    }
    return newObj;
}
console.log(clone(obj5));