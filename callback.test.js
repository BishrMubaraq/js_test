function greet(name) {
  return "Hello" + name + "!";
}

test("data: Bishr", done => {
  function callback(value) {
    expect(value).toBe("Bishr");
    done();
  }
  greet(callback("Bishr"));
});
