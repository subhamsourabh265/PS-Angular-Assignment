// const groupAnagrams = (list) => {
//     const listMap = {};  // Object with sorted string as key and array of anagrams as value 

//     for (const i of list) {
//         // sort string in each iteration
//         let sortedString = [...i].sort().join(''); 
//         // Logical OR Assignment operator to check if sorted key is not present
//         listMap[sortedString] ||= []; 
//         // Logical AND Assignment operator to check if sorted key is present
//         listMap[sortedString] &&= [...listMap[sortedString],i];
//     }

//     return Object.values(listMap);
// }

// const listOfWords = ['rat', 'jar', 'tar', 'raj','ram', 'arm', 'mar', 'art'];

// console.log(groupAnagrams(listOfWords)); 
// //Output - [['rat', 'tar', 'art'],['jar', 'raj'],['ram', 'arm', 'mar']];


// //Using for..of loop and spread operator with string

// const str = "abc";

// console.log(...str)    // a b c

// for (const i of str) {
//     console.log(i);   // a b c
// }

// //similar behavior with array

// const arr = [1, 2, 3, 4, 5];

// console.log(...arr);  // 1 2 3 4 5

// for (const i of arr) {
//     console.log(i);   // 1 2 3 4 5
// }

// //with regular objects, for..of and spread operator will throw TypeError
// const obj = {
//   a: 10,
//   b: 20,
//   c: 50,
//   d: 100
// }
// console.log(...obj);  // TypeError: Found non-callable @@iterator
// for (const i of obj) {
//     console.log(i);   // TypeError: obj is not iterable
// }
// // So, how to convert obj to an iterable so that, with for...of and ...obj, it will not throw any error
// // Let's convert the object obj to an iterable using for..in loop and Symbol.iterator
// obj[Symbol.iterator] = function() {
//     const tempArr = []
//     let i = -1;
//     for (const j in this){
//         if (this.hasOwnProperty(j))
//            tempArr.push(this[j]) ;
//     }
//     return {
//         next() {
//             i++;
//             return i < tempArr.length ? {value: tempArr[i], done: false} : {done: true};
//         }
//     }
// }
// //Now, object obj can be used as iterable
// console.log(...obj);  // 10 20 50 100
// for (const i of obj) {
//     console.log(i);   // 10 20 50 100
// }

// Promise.race()
import { Observable, of } from 'rxjs';
// import { Observable } from 'rxjs';
const observable1 = of(1);
const observable2 = of(['hello', 'rxjs']);
// const observable3 = Observable.fromEvent(
//   document.querySelector('button'),
//   'click'
// );
// const observable4 = fromPromise(fetch('/api'));

// const observable5 = Observable.create((observer) => {
//   observer.next('first emitted value');
//   observer.next('second emitted value');
//   observer.complete();
// });

// // subscribe to any of them
// observable1.subscribe((response) => console.log(response)); // 1
// observable2.subscribe((response) => console.log(response)); // 1
// observable5.subscribe((response) => console.log(response));

// console.log(globalThis);

const observable$ = Observable.create((observer) => {
    try {
        //Execution
        observer.next('First value')
        observer.next('Second value')
        observer.next('Third value')

        setInterval(() => {
            observer.next('Async value')
            // observer.complete();
            observer.next('value not send')
            observer.complete();
        }, 1000)

        
    } catch (err) {
            observer.error(err)
    }
});

let sub$ = observable$.subscribe(
    (response) => console.log(response),
    err => console.log(err),
    () => console.log("completed")
    );

    sub$.unsubscribe();

