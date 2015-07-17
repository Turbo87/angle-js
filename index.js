'use strict';

var PI = Math.PI;
var PI2 = Math.PI * 2;
var PI_HALF = Math.PI / 2;

var DEG_TO_RAD = PI / 180;
var RAD_TO_DEG = 180 / PI;

var FULL_CIRCLE = PI2;
var HALF_CIRCLE = PI;
var QUARTER_CIRCLE = PI_HALF;

/**
 * @constructor
 * @param {Number} radians
 *
 * @see {@link Angle.fromRadians}
 */
var Angle = function(radians) {
    /**
     * @private
     * @type Number
     */
    this._value = radians;
};

/**
 * Creates a new {@link Angle} instance with the given {@linkcode degrees} value.
 *
 * @param {Number} degrees
 * @returns {Angle}
 */
Angle.fromDegrees = function(degrees) {
    return new Angle(degrees * DEG_TO_RAD);
};

/**
 * Creates a new {@link Angle} instance with the given {@linkcode radians} value.
 *
 * @param {Number} radians
 * @returns {Angle}
 */
Angle.fromRadians = function(radians) {
    return new Angle(radians);
};

/**
 * Creates a new {@link Angle} instance representing 0 degrees.
 *
 * @returns {Angle}
 */
Angle.zero = function() {
    return Angle.fromRadians(0);
};

/**
 * Creates a new {@link Angle} instance representing a full circle (360 degrees).
 *
 * @returns {Angle}
 */
Angle.fullCircle = function() {
    return Angle.fromRadians(FULL_CIRCLE);
};

/**
 * Creates a new {@link Angle} instance representing a half circle (180 degrees).
 *
 * @returns {Angle}
 */
Angle.halfCircle = function() {
    return Angle.fromRadians(HALF_CIRCLE);
};

/**
 * Creates a new {@link Angle} instance representing a quarter circle (90 degrees).
 *
 * @returns {Angle}
 */
Angle.quarterCircle = function() {
    return Angle.fromRadians(QUARTER_CIRCLE);
};

/**
 * Returns the encapsulated angle in degrees.
 * @returns {number}
 */
Angle.prototype.inDegrees = function() {
    return this._value * RAD_TO_DEG;
};

/**
 * Returns the encapsulated angle in radians.
 * @returns {number}
 */
Angle.prototype.inRadians = function() {
    return this._value;
};

/**
 * Returns a new {@link Angle} instance representing the absolute value.
 * @returns {Angle}
 */
Angle.prototype.absolute = function() {
    return Angle.fromRadians(Math.abs(this._value));
};

/**
 * Returns the sine of the encapsulated angle.
 * @returns {number}
 */
Angle.prototype.sin = function() {
    return Math.sin(this._value);
};

/**
 * Returns the cosine of the encapsulated angle.
 * @returns {number}
 */
Angle.prototype.cos = function() {
    return Math.cos(this._value);
};

/**
 * Returns the tangent of the encapsulated angle.
 * @returns {number}
 */
Angle.prototype.tan = function() {
    return Math.tan(this._value);
};

module.exports = Angle;
