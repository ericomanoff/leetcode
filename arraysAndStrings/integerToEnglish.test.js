const {numberToWords, convertLowNumber} = require('./integerToEnglish.js')

describe('numberToWords', ()=>{
    it('converts numbers to words', ()=>{
        expect(numberToWords(123)).toEqual("One Hundred Twenty Three")
        expect(numberToWords(12345)).toEqual("Twelve Thousand Three Hundred Forty Five")
        expect(numberToWords(1234567)).toEqual("One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven")
        expect(numberToWords(1234567891)).toEqual("One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One")
        expect(numberToWords(0)).toEqual("Zero")
        expect(numberToWords(1000)).toEqual("One Thousand")
        expect(numberToWords(1000000)).toEqual("One Million")
        expect(numberToWords(1000000000)).toEqual("One Billion")
    })

    it('converst 3 digit numbers to words', ()=>{
       expect(convertLowNumber(100)).toEqual("One Hundred")
       expect(convertLowNumber(121)).toEqual("One Hundred Twenty One")
       expect(convertLowNumber(511)).toEqual("Five Hundred Eleven")
    })
})