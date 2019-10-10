
const items = [
    {name: 'bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'album', price: 10},
    {name: 'book', price: 5},
    {name: 'phone', price: 500},
    {name: 'computer', price: 1000},
    {name: 'keyboard', price: 25}
]

const numb = [1, 2, 3, 4, 5]

const includesTwo = numb.includes(7) 
console.log(includesTwo);


const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0)
console.log(total);




// const hasInexpensiveItems = items.every((item) => {
//     return item.price <= 1000;
// })
// console.log(hasInexpensiveItems);



// const hasInexpensiveItems = items.some((item) => {
//     return item.price <= 100;
// })
// console.log(hasInexpensiveItems);




// items.forEach((item) => {
//     console.log(item.price);
// })



// const foundItem = items.find((item) => {
//     return item.name === 'album';
// })
// console.log(foundItem);




// const itemNames = items.map((item) => {
//     return item.price;
// })
// console.log(itemNames);



// const filteredItems = items.filter((item) => {
//     return item.price <= 100;
// })
// console.log(items);
// console.log(filteredItems);

