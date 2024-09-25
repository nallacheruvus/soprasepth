import { range, merge, timer, throwError, interval, iif, of, from } from 'rxjs';
import { map, groupBy, concat, filter, max, min, take, count, reduce } from 'rxjs/operators';

const data = [
    { groupid: "QA", value: 21 },
    { groupid: "Programming", value: 212 },
    { groupid: "DBA", value: 221 },
    { groupid: "DBA", value: 121 },
    { groupid: "QA", value: 2221 },
    { groupid: "Programming", value: 721 },
]
const ttt = from(data).pipe(groupBy(i => i.groupid));
ttt.subscribe(x => console.log(x));









function newFunction() {
    let listaObs = of(1, 3, 5, 7, 9);
    let listbObs = of(2, 4, 6, 8, 10, 12, 14, 11126);
    let f_val = listaObs.pipe(concat(listbObs));
    f_val.subscribe(x => console.log(x));
    console.log("*".repeat(30));
    let f_vala = merge(listaObs, listbObs);
    f_vala.subscribe(x => console.log(x));
}

function taskDrille() {
    let items = [
        { name: "Gel", price: 1000 },
        { name: "Toothpowder", price: 100 },
        { name: "Powder", price: 10 },
        { name: "Soap", price: 200 },
        { name: "JAM", price: 500 },
    ];
    let obsItems = from(items);
    let f_val = obsItems.pipe(reduce((acc, itemsdet) => acc + itemsdet.price, 0));
    f_val.subscribe(x => console.log(`The total price is ${x}`));
}

function tskDrillD() {
    let a_num = of(1, 99, 2, 3, 4, 5, 6, 7, 8, 90);
    let fin = a_num.pipe(count());
    fin.subscribe(x => console.log(x));
    let fina = a_num.pipe(max((a, b) => a - b));
    fina.subscribe(x => console.log(x));
    let finb = a_num.pipe(min((a, b) => a - b));
    finb.subscribe(x => console.log(x));
}

function taskDrillC() {
    let bobs = interval(2000);
    let casea = bobs.pipe(take(10));
    casea.subscribe(x => console.log(x));
}

function taskDrillB() {
    let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 1010];
    let myobs = from(arr);
    myobs.subscribe(x => console.log(x));
}

function taskDrillA() {
    let myobs = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    let case1 = myobs.pipe(filter(x => x % 2 === 0), reduce((a, o) => a + o, 0));
    case1.subscribe(x => console.log(x));
}

function taskaDrill() {
    let mynums = range(1, 100);
    // mynums.subscribe(x => console.log(x));
    console.log("*".repeat(30));
    // let a_nums = timer(10, 1000);
    // a_nums.subscribe(x => console.log(x));
    // const res_error = throwError(new Error("error"));
    // res_error.subscribe(x => console.log(x), (e) => console.log(e));
    let taska = iif(() => (Math.floor(Math.random() * 6) + 1) % 2 === 0,
        of("Even Number"), of("Odd Number"));
    taska.subscribe(v => console.log(v));
}

