// let
// const
// var

// let prevents the moisting undefined error for var assignment

const months = ['January', 'February'];
months.push('bam');
console.log(months);

// You can force immutability with
const Immutablemonths = Object.freeze(['January', 'February']);
Immutablemonths.push('March');

console.log(Immutablemonths); // Cannot add property 2, object is not extensible
