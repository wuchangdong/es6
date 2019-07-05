/**
 * @file: es6.generator
 * @author: wuchangdong
 */

function *read(books) {
    for (let i = 0; i < books.length; i++) {
        yield books[i];
    }
    return '结束';
}
let t = read(['1', '2']);
console.log(t.next());
console.log(t.next());
console.log(t.next());
console.log(t.next());

