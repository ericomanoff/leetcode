const lengthOfLongestSubstring = (s)=> {
    let n = s.length;
    let set = {}
    let ans = 0;
    let i = 0;
    let j = 0;

    while( i < n && j < n){

        if(!set.hasOwnProperty(s.charAt(j))){
            set[s.charAt(j++)] = `${j-1} index of string` // the j++ does not evaluate until after charat is evaluated
            ans = Math.max(ans, j-i);
        }else{
            delete set[s.charAt(i++)]
        }
    }

    return ans;
  }

  module.exports = lengthOfLongestSubstring