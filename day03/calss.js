// 定义一个类
class Parent {
    constructor(name) {
        this.name = name; // 实例的私有属性
    }
    getName() {
        console.log(this.name);
    }
}

let p = new Parent('wcd');

var Parent =
/*#__PURE__*/
function () {
  function Parent(name) {
    _classCallCheck(this, Parent);

    this.name = name; // 实例的私有属性
  }

  _createClass(Parent, [{
    key: "getName",
    value: function getName() {
      console.log(this.name);
    }
  }]);

  return Parent;
}();

// 如果这个实例不是这个构造函数的实例的话，就报错 不能把一个类当成函数来用
function _classCallCheck(instance, Constructor) {
    if(!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a calss as a function');
    }
}



class Child extends Parent {
    constructor(name, age) {
        // 指的是父类的构造函数
        super(name);
        this.age = age;
    }

    getAge() {
        console.log(this.age);
    }
}