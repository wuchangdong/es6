/**
 * @file: generator
 * @author: wuchangdong
 */

// read 生成器 可以生成迭代器
function read(books) {
    let index = 0;
    return {
        next() {
            let done = index === books.length;
            let value = done ? undefined : books[index++];
            return {
                done,
                value
            };
        }
    };
}

let it = read([1, 2]);
console.log(it.next());
console.log(it.next());
console.log(it.next());