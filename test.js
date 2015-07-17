'use strict';

var assert = require('chai').assert;
var Angle = require('./');

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
});
