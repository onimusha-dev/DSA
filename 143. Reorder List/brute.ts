
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reorderList(head: ListNode) {
    if (!head || !head.next) return;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    // step 1: find the middle of the list
    while (fast?.next && fast.next.next) {
        slow = slow!.next;
        fast = fast.next.next
    }

    // step 2: reverse the second half
    let second: ListNode | null = slow!.next;
    slow!.next = null;

    let prev: ListNode | null = null;

    while (second) {
        const next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }

    // step 3: merge the two halves
    let first: ListNode | null = head;
    second = prev;

    while (second) {
        const temp1: any = first!.next;
        const temp2 = second.next;

        first!.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }
}