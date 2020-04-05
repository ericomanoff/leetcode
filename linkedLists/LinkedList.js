class LinkedList{
    constructor({ListNode}){
        this.head = null
        this.size = 0
        this.ListNode = ListNode
    }

    add(val){
        const newNode = new this.ListNode(val)
        if(this.size === 0){
            this.head = newNode
        }else{
            //find last node and set new node to it's next val
            let currentNode = this.head
            while(currentNode.next !== null){
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        ++this.size
    }
}

module.exports = { LinkedList }