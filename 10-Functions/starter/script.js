'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Jameson');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//DOES NOT work
//book(23, 'Sarah Williams');

//The call method
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'Mary Cooper');

//The apply method
const johnBooking = [23, 'John Cooper'];
book.apply(eurowings, johnBooking);
//The call method with spread operator
const tomBooking = [635, 'Tom Bateman'];
book.call(lufthansa, ...tomBooking);
console.log(eurowings);
console.log(lufthansa);

//Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Jim Joestar');
bookLH(635, 'Tomas Wayne');
console.log(eurowings);
console.log(lufthansa);

const bookEW30 = book.bind(eurowings, 30);
bookEW30('Billy Idol');
console.log(eurowings);

// IIFE
(function () {
  console.log('This function will run only once and will never run again');
})();

(() => console.log('This arrow function will never run again'))();
