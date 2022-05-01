const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(a) {
let m=a.lastIndexOf('@');
return a.substring(m+1, a.length+1);
}

module.exports = {
  getEmailDomain
};
