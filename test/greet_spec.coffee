greet = require "greet"

describe "greet", ->
  it "should greet a person by name", ->
    expect(greet "allen").to.eql "hello, allen"

  it "should greet a person flirtatiously if drunk", ->
    expect(greet "allen", "drunk").to.eql "hello allen, you look sexy today."
