// Definition for singly-linked list
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

// Reverse the linked list using 3 pointers
function reverseList(head: ListNode | null): ListNode | null {
    // Previous node (starts as null because the new tail points to null)
    let prev: ListNode | null = null;

    // Current node we're processing
    let curr: ListNode | null = head;

    while (curr) {
        // Save the rest of the list
        const next = curr.next;

        // Reverse the current node's pointer
        curr.next = prev;

        // Move prev forward
        prev = curr;

        // Move current forward
        curr = next;
    }

    // prev is now the new head
    return prev;
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

console.log("Original:");
printList(head);

const reversed = reverseList(head);

console.log("Reversed:");
printList(reversed);

/*
Expected Output:

Original:
1 -> 2 -> 3 -> 4 -> 5 -> null

Reversed:
5 -> 4 -> 3 -> 2 -> 1 -> null
*/