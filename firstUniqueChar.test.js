const firstUniqChar = require('./firstUniqueChar.js')

describe('firstUniqChar', ()=>{
    it('finds the first unique char', ()=>{
        expect(firstUniqChar("leetcode")).toEqual(0)
        expect(firstUniqChar("loveleetcode")).toEqual(2)
        expect(firstUniqChar("cc")).toEqual(-1)
    })
})