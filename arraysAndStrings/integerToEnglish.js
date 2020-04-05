const numberToWords = (int)=>{
    //split the number at 3 digit intervals
    let benchMarks = ['Billion', 'Million', 'Thousand', '']
    let number = int;
    let arrayOfThrees = []
    let ans = '';

    if(number === 0){
        return 'Zero'
    }

    while(number >= 1000){
        let mod = number % 1000
        number = Math.floor(number/1000);
        arrayOfThrees.unshift(mod)
    }
    arrayOfThrees.unshift(number)

    //trim benchMarks to match values
    benchMarks = benchMarks.slice(-arrayOfThrees.length)

    //loop over the number of intervals and print
    //the coreseponding value: trillion, billion
    for(let i=0; i<arrayOfThrees.length; i++){
        if(arrayOfThrees[i] !== 0){
            ans += convertLowNumber(arrayOfThrees[i]) + " " + benchMarks[i] + " "
        }
    }

    //write a function that takes three digits and prints
    //the corresponding words
    return ans.trim()
}

//close keep rolling, consider subtracting each value added to the string
const convertLowNumber = (num) => {
    let res = ''
    let zeroThroughNineteen = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    let doubleDigits = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety' ]
    let index = 0

    while(num > 0 ){
        
        if(num >= 100){
            index = Math.floor(num/100)
            res += zeroThroughNineteen[index] + ' Hundred '
            num = num - (index * 100)
        }

        if( num > 19){
            index = Math.floor(num/10)
            res += doubleDigits[index] + ' '
            num = num - (index * 10)
        }
        
        if( num <= 19 && num >= 0){
            index = num
            res += zeroThroughNineteen[index] + ' '
            num = num - index
        }
    }


    return res.trim()
}

module.exports = {numberToWords, convertLowNumber}