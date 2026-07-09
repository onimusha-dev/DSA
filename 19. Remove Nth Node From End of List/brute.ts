
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverse(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr = head;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}
/**
 * Time Complexity:
 * - Reverse the linked list      -> O(n)
 * - Traverse to the nth node     -> O(n)
 * - Reverse the list again       -> O(n)
 * - Total                        -> O(3n) = O(n)
 *
 * Although the algorithm traverses the list three times, Big-O notation
 * ignores constant factors, so the overall time complexity is O(n).
 *
 * Space Complexity:
 * - Uses only a few pointer variables.
 * - No extra data structures are allocated.
 * - Total                        -> O(1)
 *
 * Note:
 * - This approach is correct but not optimal.
 * - The standard solution uses the fast and slow pointer technique,
 *   which removes the node in a single traversal (O(n), O(1)).
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    head = reverse(head);

    // removing first node
    if (n === 1) {
        head = head!.next;
        return reverse(head);
    }

    let curr = head;
    let prev: ListNode |null = null;

    for (let i = 1; i < n; i++) {
        prev = curr;
        curr = curr!.next;
    }

    prev!.next = curr!.next;

    return reverse(head);
}