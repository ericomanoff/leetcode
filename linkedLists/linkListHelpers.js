const {ListNode} = require('./ListNode')
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0)
    let p = l1
    let q = l2
    let curr = dummyHead
    let carry = 0

    while(p !== null || q != null){
        x = p !== null ? p.val : 0
        y = q !== null ? q.val : 0
        sum = x + y + carry
        carry = Math.floor(sum / 10)
        curr.next = new ListNode(sum % 10)
        curr = curr.next
        if(p !== null) p = p.next
        if(q !== null) q = q.next
    }
    if(carry > 0){
        curr.next = new ListNode(carry)
    }
    return dummyHead.next
};

const mergeTwoLists = function(l1, l2){
    //get values of first nodes
    let dummyHead = new ListNode(0)
     let p = l1
    let q = l2
    let curr = dummyHead
    //set head reference to the node with the lower of the two values
    //which ever node was lower, get it's next node,
    //which ever of those nodes is lower, set it as the current/head node's next
    while(p !== null || q !== null){
        
        console.log('p', p)
        console.log('q', q)
        
        if(q === null ){
            p = p.next
            curr.next = p
        }else if (p === null){
            q = q.next
            curr.next = q
        }else if(p.val <= q.val){
            p = p.next
            curr.next = p
        }else{
            q = q.next
            curr.next = q
        }

        console.log('curr', curr)
        curr = curr.next
    }
    return dummyHead.next
}

module.exports = { addTwoNumbers, mergeTwoLists }