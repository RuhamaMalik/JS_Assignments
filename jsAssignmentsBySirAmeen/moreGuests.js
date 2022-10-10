//////// 16 - More Guests

//You just found a bigger dinner table, so now more space is available.Think of three more guests to invite to dinner.•Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.•Use append() to add one new guest to the end of your list.•Print a new set of invitation messages, one
//for each person in your list.

let guests = ['gull', 'Fahad', 'irma'];
console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);

console.log (`Sorry, ${guests[1]}  can't make it to dinner.`)

//Fahad can't make it! Let's invite shah instead.

guests[1] = 'shah';

console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);

//We got a bigger table, so let's add some more people to the list.


console.log ('We got a bigger table !');

guests.unshift('Ruhama');
guests.splice(3,0,'Fahad');
guests.push('Narmeen');

console.log(`${guests[0]} please come to dinner`);
console.log(`${guests[1]} please come to dinner`);
console.log(`${guests[2]} please come to dinner`);
console.log(`${guests[3]} please come to dinner`);
console.log(`${guests[4]} please come to dinner`);
console.log(`${guests[5]} please come to dinner`);

