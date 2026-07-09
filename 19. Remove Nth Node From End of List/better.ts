
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummy = new ListNode(1, head)
    // we need one more node to shift the 
    // left pointer to left by 1 so it becomes on right place
    let left = dummy
    let right = head // head + n

    // placing the fast pointer to its location
    while (n > 0 && right) {
        right = right.next
        n -= 1;
    }

    // now this is the real loop to get the 
    //  left pointer on the target node to change
    while (right) {
        left = left.next!
        right = right.next
    }
 
    left.next = left.next!.next
    return dummy.next;
}