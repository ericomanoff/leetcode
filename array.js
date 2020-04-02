let nums = [2, 7, 11, 15];
let target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //select the first number from the array
    //try all remaining numbers
    //if no match found, select the next number from the array and search from it's index
    for(let i=0; i<nums.length; i++){
        console.log('i: ', i);
        for(let j=1; j<nums.length; j++){
            console.log('j: ', j);
            if(nums[i] + nums[j] === target){
                return [i, j]
            }                        
        }
    }

};

const res = twoSum(nums, target)
console.log(res)