'use strict';

var assert = require('chai').assert;
var Angle = require('./');

var DELTA = 0.00000001;

describe('Angle', function() {
    it('works as advertised', function() {
        var angle = Angle.fromRadians(Math.PI);
        assert.equal(angle.inDegrees(), 180);
    });

    describe('fromDegrees()', function() {
        it('should exist', function() {
            assert.ok(Angle.fromDegrees);
        });

        it('should create an Angle instance', function() {
            assert.instanceOf(Angle.fromDegrees(180), Angle);
        });
    });

    describe('fromRadians()', function() {
        it('should exist', function() {
            assert.ok(Angle.fromRadians);
        });

        it('should create an Angle instance', function() {
            assert.instanceOf(Angle.fromRadians(Math.PI), Angle);
        });
    });

    describe('zero()', function() {
        it('should return an Angle instance representing 0 degrees', function() {
            assert.equal(Angle.zero().inDegrees(), 0);
        });
    });

    describe('fullCircle()', function() {
        it('should return an Angle instance representing a full circle (360 degrees)', function() {
            assert.equal(Angle.fullCircle().inDegrees(), 360);
        });
    });

    describe('halfCircle()', function() {
        it('should return an Angle instance representing a half circle (180 degrees)', function() {
            assert.equal(Angle.halfCircle().inDegrees(), 180);
        });
    });

    describe('quarterCircle()', function() {
        it('should return an Angle instance representing a quarter circle (90 degrees)', function() {
            assert.equal(Angle.quarterCircle().inDegrees(), 90);
        });
    });

    describe('toDegrees()', function() {
        it('should return angle in degrees', function() {
            assert.equal(Angle.fromDegrees(0).inDegrees(), 0);
            assert.equal(Angle.fromDegrees(90).inDegrees(), 90);
            assert.equal(Angle.fromDegrees(-90).inDegrees(), -90);
            assert.equal(Angle.fromDegrees(9000).inDegrees(), 9000);

            assert.equal(Angle.fromRadians(0).inDegrees(), 0);
            assert.equal(Angle.fromRadians(Math.PI).inDegrees(), 180);
        });
    });

    describe('toRadians()', function() {
        it('should return angle in radians', function() {
            assert.equal(Angle.fromRadians(0).inRadians(), 0);
            assert.equal(Angle.fromRadians(1).inRadians(), 1);
            assert.equal(Angle.fromRadians(-1).inRadians(), -1);
            assert.equal(Angle.fromRadians(9000).inRadians(), 9000);

            assert.equal(Angle.fromDegrees(0).inRadians(), 0);
            assert.equal(Angle.fromDegrees(180).inRadians(), Math.PI);
        });
    });

    describe('absolute()', function() {
        it('should return a new Angle instance', function() {
            var angle = Angle.fromDegrees(42);
            assert.notStrictEqual(angle.absolute(), angle);
        });

        it('should return absolute angle', function() {
            assert.equal(Angle.fromDegrees(-42).absolute().inDegrees(), 42);
            assert.equal(Angle.fromDegrees(0).absolute().inDegrees(), 0);
            assert.equal(Angle.fromDegrees(42).absolute().inDegrees(), 42);
            assert.equal(Angle.fromDegrees(9000).absolute().inDegrees(), 9000);
        });
    });

    describe('sin()', function() {
        it('should return sine of the angle', function() {
            assert.closeTo(Angle.fromDegrees(0).sin(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(90).sin(), 1, DELTA);
            assert.closeTo(Angle.fromDegrees(180).sin(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(270).sin(), -1, DELTA);
            assert.closeTo(Angle.fromDegrees(360).sin(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(-42).sin(), Math.sin(-42 * Math.PI / 180), DELTA);
        });
    });

    describe('cos()', function() {
        it('should return cosine of the angle', function() {
            assert.closeTo(Angle.fromDegrees(0).cos(), 1, DELTA);
            assert.closeTo(Angle.fromDegrees(90).cos(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(180).cos(), -1, DELTA);
            assert.closeTo(Angle.fromDegrees(270).cos(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(360).cos(), 1, DELTA);
            assert.closeTo(Angle.fromDegrees(-42).cos(), Math.cos(-42 * Math.PI / 180), DELTA);
        });
    });

    describe('tan()', function() {
        it('should return tangent of the angle', function() {
            assert.closeTo(Angle.fromDegrees(-45).tan(), -1, DELTA);
            assert.closeTo(Angle.fromDegrees(0).tan(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(45).tan(), 1, DELTA);
            assert.closeTo(Angle.fromDegrees(60).tan(), Math.tan(60 * Math.PI / 180), DELTA);
        });
    });

    describe('normalized()', function() {
        it('should return a new Angle instance', function() {
            var angle = Angle.fromDegrees(1122);
            assert.notStrictEqual(angle.normalized(), angle);
        });

        it('should return normalized angle', function() {
            assert.closeTo(Angle.fromDegrees(0).normalized().inDegrees(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(90).normalized().inDegrees(), 90, DELTA);
            assert.closeTo(Angle.fromDegrees(180).normalized().inDegrees(), 180, DELTA);
            assert.closeTo(Angle.fromDegrees(270).normalized().inDegrees(), 270, DELTA);
            assert.closeTo(Angle.fromDegrees(360).normalized().inDegrees(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(450).normalized().inDegrees(), 90, DELTA);
            assert.closeTo(Angle.fromDegrees(540).normalized().inDegrees(), 180, DELTA);

            assert.closeTo(Angle.fromDegrees(-90).normalized().inDegrees(), 270, DELTA);
            assert.closeTo(Angle.fromDegrees(-180).normalized().inDegrees(), 180, DELTA);
            assert.closeTo(Angle.fromDegrees(-270).normalized().inDegrees(), 90, DELTA);
            assert.closeTo(Angle.fromDegrees(-360).normalized().inDegrees(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(-450).normalized().inDegrees(), 270, DELTA);
            assert.closeTo(Angle.fromDegrees(-540).normalized().inDegrees(), 180, DELTA);

            assert.closeTo(Angle.fromDegrees(1122.3).normalized().inDegrees(), 42.3, DELTA);
            assert.closeTo(Angle.fromDegrees(-42.9).normalized().inDegrees(), 317.1, DELTA);
        });
    });

    describe('normalizedDelta()', function() {
        it('should return a new Angle instance', function() {
            var angle = Angle.fromDegrees(1122);
            assert.notStrictEqual(angle.normalizedDelta(), angle);
        });

        it('should return normalized delta angle', function() {
            assert.closeTo(Angle.fromDegrees(0).normalizedDelta().inDegrees(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(90).normalizedDelta().inDegrees(), 90, DELTA);
            assert.closeTo(Angle.fromDegrees(180).normalizedDelta().inDegrees(), 180, DELTA);
            assert.closeTo(Angle.fromDegrees(270).normalizedDelta().inDegrees(), -90, DELTA);
            assert.closeTo(Angle.fromDegrees(360).normalizedDelta().inDegrees(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(450).normalizedDelta().inDegrees(), 90, DELTA);
            assert.closeTo(Angle.fromDegrees(540).normalizedDelta().inDegrees(), 180, DELTA);

            assert.closeTo(Angle.fromDegrees(-90).normalizedDelta().inDegrees(), -90, DELTA);
            assert.closeTo(Angle.fromDegrees(-180).normalizedDelta().inDegrees(), -180, DELTA);
            assert.closeTo(Angle.fromDegrees(-270).normalizedDelta().inDegrees(), 90, DELTA);
            assert.closeTo(Angle.fromDegrees(-360).normalizedDelta().inDegrees(), 0, DELTA);
            assert.closeTo(Angle.fromDegrees(-450).normalizedDelta().inDegrees(), -90, DELTA);
            assert.closeTo(Angle.fromDegrees(-540).normalizedDelta().inDegrees(), -180, DELTA);

            assert.closeTo(Angle.fromDegrees(1122.3).normalizedDelta().inDegrees(), 42.3, DELTA);
            assert.closeTo(Angle.fromDegrees(-42.9).normalizedDelta().inDegrees(), -42.9, DELTA);
        });
    });
});
