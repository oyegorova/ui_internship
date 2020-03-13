describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });
  it("Should have amount 0 if no cells were added", () => {
    assert.equal(list.amount, 0);
  });

  it("Should be able to push cells", () => {
    assert.equal(list.head, null);
    list.push(5);
    assert.equal(list.head.value, 5);
  });

  it("Should provide correct `next` property work", () => {
    list.push(5);
    list.push(10);
    list.push(20);

    assert.equal(list.head.value, 5);
    assert.equal(list.head.next.value, 10);
    assert.equal(list.head.next.next.value, 20);
  });

  it("Should call callback function with every cell when passed into iterate method", () => {
    const arr = [];
    const firstCellValue = 10;
    const secondCellValue = 20;

    function cb(cell) {
      arr.push(cell.value);
    }

    list.push(firstCellValue);
    list.push(secondCellValue);

    list.iterate(cb);

    const arrTest = [firstCellValue, secondCellValue];
    assert.equal(arr.length, arrTest.length);
    for (let i = 0; i < arr.length; i++) {
      assert.equal(arr[i], arrTest[i]);
    }
    //assert.equal(arr, [firstCellValue, secondCellValue]);
  });

  it("Pop method should remove cell from the end", () => {
    const firstValue = 5;
    const secondValue = 10;
    const thirdValue = 20;

    list.push(firstValue);
    list.push(secondValue);
    list.push(thirdValue);

    assert.equal(list.tail.value, thirdValue);
    list.pop();
    assert.equal(list.tail.value, secondValue);
    list.pop();
    assert.equal(list.tail.value, firstValue);
    list.pop();
    assert.equal(list.tail, null);
  });

  describe("insertAfter method", () => {
    const firstValue = 5;
    const secondValue = 10;
    const valueToInsert = 30;

    it("should return false when trying to insert after not existed value", () => {
      const notExistedValue = 99;

      list.push(firstValue);
      list.push(secondValue);

      const failResult = list.insertAfter(notExistedValue, valueToInsert);

      assert.equal(failResult, false);
      assert.equal(list.amount, 2);
    });

    it("has to insert new Cell after one with specified value", () => {
      const thirdValue = 20;

      list.push(firstValue);
      list.push(secondValue);
      list.push(thirdValue);

      list.insertAfter(secondValue, valueToInsert);

      assert.equal(list.head.next.next.value, valueToInsert);
      assert.equal(list.tail.value, thirdValue);
    });
  });

  describe("removeItem method", () => {
    const firstValue = 1;
    const existedValue = 2;
    const notExistedValue = 3;

    it("should return true if passed value is removed", () => {
      list.push(firstValue);
      list.push(existedValue);

      const result = list.removeItem(existedValue);
      assert.equal(result, true);
    });

    it("should remove item from the list if one exist", () => {
      list.push(firstValue);
      list.push(existedValue);

      assert.equal(list.head.next.value, existedValue);
      list.removeItem(existedValue);
      assert.equal(list.head.next, null);
    });

    it("should not effect list for not existed value", () => {
      list.push(firstValue);
      list.push(existedValue);

      list.removeItem(notExistedValue);
      assert.equal(list.head.value, firstValue);
      assert.equal(list.head.next.value, existedValue);

      assert.equal(list.head.next.next, null);
    });
  });
});
