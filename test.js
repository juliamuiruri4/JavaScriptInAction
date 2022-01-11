/* describe("pow", function() {
    it("raises 2 to the 3rd power", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("raises 3 to the 4th power", function() {
        assert.equal(pow(3, 4), 81);
    })

}); */

// Test more values to the power of 3 using a for-loop

describe("pow", function() {

    //helper function that peforms the test
    function makeTest(x) {
        let expected = x * x * x;

        it(`${x} raised to the power of 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let i = 1; i <= 5; i++) {
        makeTest(i);
    }
}); 

// Grouping (the helper function and the for loop) is done using a nested describe
describe("pow", function() {

    describe("Raises x to the power of 3", function() {

        function makeTest(x) {

            let expected = x * x * x;

            it(`${x} raised to the power of 3 is ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let p = 1; p <= 5; p++) {
            makeTest(p);
        }
    });

});

describe("pow", function() {
    before(() => alert("Testing started - before running all tests"));
    after(() => alert("Testing ended - after running all tests"));

    beforeEach(() => alert("Before test 1"));
    beforeEach(() => alert("Before test 2"));

    it("Test 1", () => alert(1));
    it("Test 2", () => alert(2));
})


// Check for NaN error
describe("pow" , function() {

    it ("for negative n, the result is NaN", function() {
        assert.isNaN(pow(2, -1));
    });

    it ("for a non-integer n, the result is NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });
})

//to run a single test in test with multiple it blocks, you can use the it.only instead of it.