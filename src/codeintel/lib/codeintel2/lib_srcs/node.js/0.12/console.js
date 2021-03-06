
/**
 * For printing to stdout and stderr. Similar to the console object
 * functions provided by most web browsers, here the output is sent to
 * stdout or stderr.
 * @type {Object}
 */
var console = {};

/**
 * Same as console.log.
 * @param data
 */
console.info = function(data) {}

/**
 * Similar to [assert.ok()][], but the error message is formatted as
 * util.format(message...).
 * @param value
 * @param message
 */
console.assert = function(value, message) {}

/**
 * Prints to stdout with newline. This function can take multiple arguments
 * in a printf()-like way. Example:
 * @param data
 */
console.log = function(data) {}

/**
 * Print to stderr &#39;Trace :&#39;, followed by the formatted message and
 * stack trace to the current position.
 * @param message
 */
console.trace = function(message) {}

/**
 * Same as console.log but prints to stderr.
 * @param data
 */
console.error = function(data) {}

/**
 * Finish timer, record output. Example:
 * @param label
 */
console.timeEnd = function(label) {}

/**
 * Same as console.error.
 * @param data
 */
console.warn = function(data) {}

/**
 * Mark a time.
 * @param label
 */
console.time = function(label) {}

/**
 * Uses util.inspect on obj and prints resulting string to stdout. This
 * function bypasses any custom inspect() function on obj. An optional
 * options object may be passed that alters certain aspects of the
 * formatted string:
 * @param obj
 * @param options
 */
console.dir = function(obj, options) {}

exports = console;

