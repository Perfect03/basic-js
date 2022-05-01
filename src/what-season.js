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
  
  if (!date) return `Unable to determine the time of year!`;

  try {
    date.getTimezoneOffset(); 
  } catch {
    throw Error("Invalid date!");
  }

  if (date.getMonth() == 11  || date.getMonth() < 2) return 'winter';
  else if (2 <= date.getMonth() && date.getMonth() <= 4 ) return 'spring';
  else if (4 <= date.getMonth() && date.getMonth() <= 7 ) return 'summer';
  else if (8 <= date.getMonth() && date.getMonth() <= 10 ) return 'autumn';

}

module.exports = {
  getSeason
};
