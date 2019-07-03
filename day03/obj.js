let obj1 = {age: 1, getFood() {
    return '11';
}};
let obj2 = {age: 2};
let obj3 = {
    getFood(){
        // 通过 super 调用父类方法
        return '22' + super.getFood();
    }
};
Object.setPrototypeOf(obj3, obj1); // 相当于 obj3.__proto__ = obj1

console.log(obj3.age);