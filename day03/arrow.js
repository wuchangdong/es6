// 箭头函数定义之后 this 就是定死的 指向外层的this
// 普通函数谁调用指向谁
let obj = {
    name: 'sss',
    getName: () => {
        console.log(this.name);
    },
    getName2: function () {
        console.log(this.name);
    }
};
obj.getName();
obj.getName2();
let fn = obj.getName2;
fn();