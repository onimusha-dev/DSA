// Definition for singly-linked list
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

// Reverse the linked list using a stack
function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;

    const stack: ListNode[] = [];
    let curr: ListNode | null = head;

    while (curr) {
        stack.push(curr);
        curr = curr.next;
    }

    const newHead = stack.pop()!;
    curr = newHead;

    while (stack.length > 0) {
        curr.next = stack.pop()!;
        curr = curr.next;
    }
    curr.next = null;

    return newHead;
}

// Print a linked list
function printList(head: ListNode | null): void {
    let curr = head;

    while (curr) {
        process.stdout.write(`${curr.val} -> `);
        curr = curr.next;
    }

    console.log("null");
}

// -------------------------
// Demo Data
// -------------------------

// 1 -> 2 -> 3 -> 4 -> 5 -> null
const head = new ListNode(
    1,
    new ListNode(
        2,
        new ListNode(
            3,
            new ListNode(
                4,
                new ListNode(5)
            )
        )
    )
);

// Print original list
console.log("Original:");
printList(head);

// Reverse the list
const reversed = reverseList(head);

// Print reversed list
console.log("Reversed:");
printList(reversed);

/*
Expected Output:

Original:
1 -> 2 -> 3 -> 4 -> 5 -> null

Reversed:
5 -> 4 -> 3 -> 2 -> 1 -> null
*/