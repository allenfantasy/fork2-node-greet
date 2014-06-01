//var expect = require("chai").expect;
var greet = require("greet");

describe('greet', function() {
  //it("is a dummy success case", function() {
    //expect(1).to.eql(1);
  //});
  it("should greet a person by name", function() {
    expect(greet("allen")).to.eql("hello, allen");
  });

  it("should greet a person flirtatiously if drunk", function() {
    expect(greet("allen", "drunk")).to.eql("hello allen, you look sexy today.");
  });
});
