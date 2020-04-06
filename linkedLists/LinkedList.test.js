const { LinkedList } = require("./LinkedList");
const { ListNode } = require("./ListNode");
const { addTwoNumbers, mergeTwoLists } = require("./linkListHelpers");

describe("LinkedList", () => {
  it("can be initialized", () => {
    const linkedList = new LinkedList({ ListNode: "A_STRING" });
    expect(linkedList.ListNode).toEqual("A_STRING");
  });
  it("can add a node", () => {
    const linkedList = new LinkedList({ ListNode });
    linkedList.add(2);
    linkedList.add(4);
    linkedList.add(3);
    expect(linkedList.size).toEqual(3);
    expect(linkedList.head.val).toEqual(2);
  });
});

describe("linkListHelpers", () => {
  it("can add two numbers", () => {
    const linkedListA = new LinkedList({ ListNode });
    linkedListA.add(2);
    linkedListA.add(4);
    linkedListA.add(3);

    const linkedListB = new LinkedList({ ListNode });
    linkedListB.add(5);
    linkedListB.add(6);
    linkedListB.add(4);

    const resultHead = addTwoNumbers(linkedListA.head, linkedListB.head);
    expect(resultHead.val).toEqual(7);
    expect(resultHead.next.val).toEqual(0);
    expect(resultHead.next.next.val).toEqual(8);
  });

  //   it("can merge two ordered lists", () => {
  //     const linkedListA = new LinkedList({ ListNode });
  //     linkedListA.add(1);
  //     linkedListA.add(2);
  //     linkedListA.add(4);

  //     const linkedListB = new LinkedList({ ListNode });
  //     linkedListB.add(1);
  //     linkedListB.add(3);
  //     linkedListB.add(4);

  //     const resultHead = mergeTwoLists(linkedListA.head, linkedListB.head);
  //     expect(resultHead.val).toEqual(1);
  //     expect(resultHead.next.val).toEqual(1);
  //     expect(resultHead.next.next.val).toEqual(2);
  //     expect(resultHead.next.next.next.val).toEqual(3);
  //     expect(resultHead.next.next.next.next.val).toEqual(4);
  //     expect(resultHead.next.next.next.next.next.val).toEqual(4);
  //   });
});
