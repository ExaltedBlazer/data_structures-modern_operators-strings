'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  hours,

  order(starterIndex, mainIndex) {
    console.log(starterIndex);
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recevied! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(`${mainIngredient}`);
    console.log(`${otherIngredients}`);
  },
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

/*
//// Working with strings 3

const fullName = 'Kaden Horrell-St.Cloud';

console.log('a+very+nice+string'.split('+'));
console.log(fullName.replace('-', ' ').split(' '));

const nameSplit = fullName.replace('-', ' ').split(' ');

const [firstName, firstLastName, secondLastName] = nameSplit;

const newName = [
  'Mr.',
  firstName,
  firstLastName.toUpperCase(),
  secondLastName.toUpperCase(),
].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.replace('-', ' ').replace('.', ' ').split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  console.log(namesUpper.join(' '));
  //console.log(namesUpper.join());
};

capitalizeName('kaden horrell-st.cloud');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Kaden'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);


//// Working with strings 2
const airline = 'TAP Air Portugal'

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAs'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

function capitalizedWord(capital) {
  const toCapital = capital.toLowerCase()
  return toCapital[0].toUpperCase() + toCapital.slice(1);
}

const toCapitalResult = capitalizedWord(passenger)

console.log(toCapitalResult);

// Comparing  emails

const email = 'hello@Jonas.io';
const loginEmail = ' Hello@Jonas.io \n'

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = loginEmail.trim();
// console.log(trimmedEmail);



const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email.toLowerCase() === normalizedEmail);

//  Replacing

const priceGB = '288,97£'
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceUS)

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
//console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus  A320neo'
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the New Airbus family');

}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('You are NOT permitted aboard');

  } else {
    console.log('Welcome aboard!');

  }
}
checkBaggage('I  have a laptop, some Food and a Pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


//// Working with strings 1
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1)
  if (s === 'B' || s === 'E')
    console.log('You got the middle seat');
  else console.log('You got lucky');


}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

//// Challenge 3

const gameEvents = new Map([
  [17, '⚽ Goal'],
  [36, '🔁 Substitution'],
  [47, '⚽ Goal'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ Goal'],
  [80, '⚽ Goal'],
  [92, '🟨 Yellow card'],
])

// 1
console.log(gameEvents.values());
const events = new Set(gameEvents.values());
console.log(events);

const arrayEvent = [...events]
console.log(arrayEvent);

// 2
gameEvents.delete(64);

//3

const time = [...gameEvents.keys()];
console.log(time);

const removedTime = time.pop();
console.log(removedTime);

console.log(`An event happened, on average, everry ${removedTime / gameEvents.size} minutes`);

// 4

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(` [${half} HALF] ${min}: ${event}`);

}

/// Maps: Iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);



////// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));


////// New Operations to Make sets Useful

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'barsil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

const fusionFoods = italianFoods.union(mexicanFoods);
console.log('Union: ', fusionFoods);

console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Different italian: ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Different mexican: ', uniqueMexicanFoods);

const uniqueFusionFoods = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueFusionFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));


////// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Kaden'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Kaden').size);


////// Challenge 2

// 1
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}


////// Looping Objects

//  Property Names
const properties = Object.keys(hours);
console.log(properties);

let openStr = `We are open on ${properties.length} days :`;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//  Property Values
const values = Object.values(hours);
console.log(values);

// Entire object
const entries = Object.entries(hours);
//console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


////// Optional Chaining

if (restaurant.hours && restaurant.hours.mon)
  console.log(restaurant.hours.mon.open);

console.log(restaurant.hours.mon?.open);
console.log(restaurant.hours?.mon?.open);

const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(`On ${day},  we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Kaden', email: 'hello@kaden.io' }];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');


/// Looping Arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


////// Challenge 1

const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');


////// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// Or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// And assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

/////// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


/// SHort Circiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('hello' && 23 && 'jonas' && null);

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


///// Rest Pattern and parameters

/// 1) Destructuring

// Spread, beacause on Right side of =
const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

/// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//// The Spread Operators

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
//console.log(badNewArr);

const newArr = [1, 2, ...arr];
//console.log(newArr);

//console.log(...newArr);
//console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. Not objects
const str = 'Kaden';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3'),
];
console.log(ingredients);

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


restaurant.orderDelivery({
  time: '22:30',
  address: 'Via  del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via  del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Defualt values

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//  Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
