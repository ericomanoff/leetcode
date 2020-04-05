const lengthOfLongestSubstring = require('./longestSubStr')

describe('lengthOfLongestSubstring', () => {
    it('finds the longest substring', ()=> {
        // expect(lengthOfLongestSubstring('b')).toEqual(1)
        // expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
        expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
        // expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
    })
})