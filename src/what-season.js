const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
 if(date === undefined) {
  return'Unable to determine the time of year!'
 }
 if(typeof date.getMonth !== 'function' || Object.getOwnPropertyNames(date).length > 0) {
  throw new Error ('Invalid Date!')
 }
let a = date.getMonth();
if (a == 0) {
  return 'winter'
}
if (a == 1) {
  return 'winter'
}
if (a == 2) {
  return 'spring'
}
if (a == 3) {
  return 'spring'
}
if (a == 4) {
  return 'spring'
}
if (a == 5) {
  return 'summer'
}
if (a == 6) {
  return 'summer'
}
if (a == 7) {
  return 'summer'
}
if (a == 8) {
  return 'autumn'
}
if (a == 9) {
  return 'autumn'
}
if (a == 10) {
  return 'autumn'
}
if (a == 11) {
  return 'winter'
}
}
module.exports = {
  getSeason
};
