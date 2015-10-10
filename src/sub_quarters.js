var addQuarters = require('./add_quarters')

/**
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * Subtract the specified number of quarters from the given date.
 *
 * @param {Date|String|Number} date to be changed
 * @param {Number} amount of quarters to be subtracted
 * @returns {Date} new date with the quarters subtracted
 */
var subQuarters = function(dirtyDate, amount) {
  return addQuarters(dirtyDate, -amount)
}

module.exports = subQuarters

