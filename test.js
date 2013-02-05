/* pagecalc / test.js
 * VOWS tests for pagecalc.
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var vows = require('vows'),
    assert = require('assert'),
    PageCalc = require('./pagecalc.js');

vows.describe('PageCalc').addBatch({
    'when we use a negative page number': {
        topic: function () {
            return PageCalc(-1, 10, 300);
        },
        'we get -1': function(topic) {
            assert.equal(topic, -1);
        }
    },
    'when we use page zero': {
        topic: function () {
            return PageCalc(0, 10, 300);
        },
        'we get -1': function(topic) {
            assert.equal(topic, -1);
        }
    },
    'when we use a page size above max of 300': {
        topic: function () {
            return PageCalc(1, 301, 300);
        },
        'we get -1': function(topic) {
            assert.equal(topic, -1);
        }
    },
    'when we use page number 2 with a limit of 300 and a max of 300': {
        topic: function () {
            return PageCalc(2, 300, 300);
        },
        'we get -1': function(topic) {
            assert.equal(topic, -1);
        }
    },
    'when we use page number 1 with a limit of 10 and a max of Infinity': {
        topic: function () {
            return PageCalc(1, 10, Infinity);
        },
        'we get an array with the numbers 1-10': function(topic) {
            assert.deepEqual(topic, [
                1, 
                2, 
                3, 
                4, 
                5, 
                6, 
                7, 
                8, 
                9, 
                10
            ]);
        }
    },
    'when we use page number 1 with a limit of 10 and a max of 10': {
        topic: function () {
            return PageCalc(1, 10, 10);
        },
        'we get an array with the numbers 1-10': function(topic) {
            assert.deepEqual(topic, [
                1, 
                2, 
                3, 
                4, 
                5, 
                6, 
                7, 
                8, 
                9, 
                10
            ]);
        }
    },
    'when we use page number 2 with a limit of 5 and a max of 10': {
        topic: function () {
            return PageCalc(2, 5, 10);
        },
        'we get an array with the numbers 6-10': function(topic) {
            assert.deepEqual(topic, [
                6, 
                7, 
                8, 
                9, 
                10
            ]);
        }
    }
}).run();