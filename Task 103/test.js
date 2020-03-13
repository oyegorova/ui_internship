describe("Stack class", () => {
  let stack;

  const firstNodeValue = 5;
  const secondNodeValue = 6;
  const thirdNodeValue = 7;

  beforeEach(() => {
    stack = new Stack();
  });

  describe("push method", () => {
    it("Should add nodes to empty stack", () => {
      stack.push(firstNodeValue);
      assert.equal(stack.last.value, firstNodeValue);
    });

    it("Should set correct prev link", () => {
      stack.push(firstNodeValue);
      stack.push(secondNodeValue);

      assert.equal(stack.last.prev.value, firstNodeValue);
    });
  });

  describe("size prop", () => {
    it("Should return 0 for empty stack", () => {
      assert.equal(stack.size, 0);
    });

    it("Should return nodes amount for not empty stack", () => {
      stack.push(firstNodeValue);
      stack.push(secondNodeValue);
      stack.push(thirdNodeValue);

      assert.equal(stack.size, 3);
    });
  });

  describe("pop method", () => {
    it("Should do nothing for empty list", () => {
      const lastSnapshotBeforePop = JSON.stringify(stack.last);
      stack.pop();
      const lastSnapshotAfterPop = JSON.stringify(stack.last);

      assert.equal(lastSnapshotBeforePop, lastSnapshotAfterPop);
    });

    it("Should return last pushed value for non empty stack", () => {
      stack.push(firstNodeValue);
      stack.push(secondNodeValue);
      stack.push(thirdNodeValue);

      const resultOfPop = stack.pop();

      assert.equal(resultOfPop, thirdNodeValue);
    });

    it("Should remove last value", () => {
      stack.push(firstNodeValue);
      stack.push(secondNodeValue);

      stack.pop();

      assert.equal(stack.last.value, firstNodeValue);
    });
  });
});
