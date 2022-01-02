function foo() {
    foo = null;
    console.log(this);
    console.log(globalThis);
}

console.log(foo());
console.log(typeof foo);
console.table()