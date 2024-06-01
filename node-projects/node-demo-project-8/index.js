// let us import the test and the assert module
const test = require("test");
const assert = require("assert");
const { describe, it } = require("test");

// Create test cases that exhibits various scenarios
test('synchronous passing test', (t) => {
    // This test passes because it doesnot throw any exception.
    assert.strictEqual(1.4, 1.4);
});

test('synchronous failing test', (t) => {
    // This test fails because it throws an exception
    assert.strictEqual(4, 6);
});

test('asynchronous passing test', async(t) => {
    // This test passes because the promise returned by async function is not rejected
    assert.strictEqual(3, 3);
})

test('asynchronous failing test', async(t) => {
    // This test fails because the promise returned by the async function is rejected
    assert.strictEqual(7, 8);
})

test('failing test using Promises', (t) => {
    // Promises can be directly used as well
    return new Promise((resolve, reject) => {
        setImmediate(() => {
            reject(new Error("this will cause the test to fail")) ;
    });
    });
});


test('callback passing test',  (t, done) => {
    // done() is the callback function. When the setImmediate() runs, it invokes done() with no arguments
    setImmediate(done);
})

test('callback failing test', (t, done) => {
    // when setImmediate() runs, done() is invoked with an error object and the test fails
    setImmediate(() => {
        done(new Error('callback failure'));
    });
});

// Let us create tests with two Subtests

test('ROOT LEVEL test', async(t) => {
    
    await t.test('SubTest 1', (t) => {
        assert.strictEqual(1, 1);
    });

    await t.test('SubTest 2', (t) => {
        assert.strictEqual(2, 2);
    })

})


// Let us skip the test cases

// here the skip otion is used but no message is provided
test('skip option', {skip: true}, (t) => {
    // This code is never executed
});


// here the skip otion is used and message is provided
test('skip option with message', {skip: 'this is skipped'}, (t) => {
    // This code is never executed
});


// test case execution using describe and it functions
describe('Test A with all possible tests', () => {
    it('should work', () => {
        assert.strictEqual(1, 1);
    });

    it('should be ok', () => {
        assert.strictEqual(2, 2);
    });

    describe('a nested thing', () => {
        it('should work', () => {
            assert.strictEqual(3, 3);
        });
    });
});