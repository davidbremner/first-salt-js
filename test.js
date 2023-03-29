const assert = require('assert');

describe("greet function", () => {
    it("should greet Marcus properly", () => {
        // arrange
        const greeter = require('./index2.js');

        // act
        const actualResult1 = greeter.greet('Marcus');

        // assert
        assert.equal('Welcome to SALT, Marcus', actualResult1);
    });

    it("should greet Eliza properly", () => {
      // arrange
      const greeter = require("./index2.js");

      // act
      const actualResult2 = greeter.greet('Eliza');

      // assert
      assert.equal('Welcome to SALT, Eliza', actualResult2);
    });

    it("should give error message for ''", () => {
        //arrange
        const greeter = require("./index2.js");
        
        //act
        const actualResult3 = greeter.greet('');
        
        //assert
        assert.equal('ERROR: Name must be entered!', actualResult3);
    });

    it("should give plural greeting for 'Eliza and Marcus'", () => {
        //arrange
        const greeter = require("./index2.js");
        
        //act
        const actualResult4 = greeter.greet('Eliza and Marcus');
        
        //assert
        assert.equal('Welcome to SALT you two, Eliza and Marcus', actualResult4);
    });
});
