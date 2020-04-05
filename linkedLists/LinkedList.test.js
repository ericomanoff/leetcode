const { LinkedList } = require('./LinkedList')
const { ListNode } = require('./ListNode')

describe('LinkedList', ()=>{
    it('can be initialized',()=>{
        const linkedList = new LinkedList({ListNode: 'A_STRING'})
        expect(linkedList.ListNode).toEqual('A_STRING')
    })
    it('can add a node', ()=>{
        const linkedList = new LinkedList({ListNode})
        linkedList.add(2)
        linkedList.add(4)
        linkedList.add(3)
        expect(linkedList.size).toEqual(3)
        expect(linkedList.head.val).toEqual(2)
    })
})