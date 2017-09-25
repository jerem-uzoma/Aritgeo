var assert = require('chai').assert;
var aritgeo = require('./aritgeo.js')

describe('Arithmetic Checker', function() {
    describe('aritgeo()', function() {
        it('should return Arithmetic when the array is Arithmetic', function() {
            assert.equal(aritgeo([1, 2, 3]), "Arithmetic");
        });
        it('should return Arithmetic when the array is Arithmetic', function() {
            assert.equal(aritgeo([2, 3, 4, 5]), "Arithmetic");
        });
        it('should return Arithmetic when the array is Arithmetic', function() {
            assert.equal(aritgeo([7, 8, 9]), "Arithmetic");
        });
        it('should return Arithmetic when the array is Arithmetic', function() {
            assert.equal(aritgeo([3, 4, 5]), "Arithmetic");
        });
    });
})

describe('Geometric Checker', function() {
    describe('aritgeo()', function() {
        it('should return geometic when the array is Geometric', function() {
            assert.equal(aritgeo([2, 4, 8]), "Geometric");
        });
        it('should return Geometric when the array is Geometric', function() {
            assert.equal(aritgeo([3, 6, 12]), "Geometric");
        });
        it('should return Geometric when the array is Geometric', function() {
            assert.equal(aritgeo([4, 8, 16]), "Geometric");
        });
        it('should return Geometric when the array is Geometric', function() {
            assert.equal(aritgeo([5, 10, 20]), "Geometric");
        });
    })
})

describe('Others', function() {
    describe('aritgeo()', function() {
        it('should return 0 when the array is empty', function() {
            assert.equal(aritgeo([]), 0);
        });
        it('should return -1 when the array is neither Arithmetic nor Geometric', function() {
            assert.equal(aritgeo([3, 20, 12]), -1);
        });
        it('should return -1 when the array is neither Arithmetic nor Geometric', function() {
            assert.equal(aritgeo([4, 8, 35]), -1);
        });
    })
})