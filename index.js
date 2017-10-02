'use strict';
const a = [];

function isMultipleOfSeventeen(n) {
    return n % 17 === 0;
}
/*要らない
function seventeen(a) {
    return Array.from.firter(isMultipleOfSeventeen)
}
*/
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}