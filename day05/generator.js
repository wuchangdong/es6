/**
 * @file generator
 * @author  wuchangdong
 */

function *read() {
    let a = 'a';
    console.log(a);
    let b = yield a = a + 1;
    console.log(a);
    console.log(b);
    let c = yield b + 2;
    console.log(c);
}

let r = read();
r.next();
r.next(2);
r.next(2);
