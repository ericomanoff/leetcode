const firstUniqChar = (s) => {
    let ans = s.length
    let uniqueChars = {}
    let duplicateChars = {}
    //iterate over each char of the string,
    for(let i=0; i<s.length; i++){
        let currentChar = s.charAt(i)

        if(!duplicateChars.hasOwnProperty(currentChar)){

            //if the char exists in a map of unique chars
            //delete from map of unique chars and add to map of duplicate chars
            if(uniqueChars.hasOwnProperty(currentChar)){
                delete uniqueChars[currentChar]
                duplicateChars[currentChar] = i
            }else{
            //if the char does not exist in a map of unique chars and does not exist in the 
            //map of duplicate chars
            //add char to map of unique chars with it's index
            uniqueChars[currentChar] = i
            }

        }else{
            //do nothing
        }

    }

    let uniqueArray = Object.entries(uniqueChars)
    if (uniqueArray.length === 0){
        return -1
    }

    for (let [key, value] of uniqueArray) {
       ans = Math.min(ans, value) 
    }

    return ans
    
}

module.exports = firstUniqChar