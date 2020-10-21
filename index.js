function largestSubarraySum(array) {
  let max_current, max_global
  max_current = max_global = array[0]

  for(let i = 1; i < array.length; i++) {
      max_current = Math.max(array[i], max_current + array[i]);
      if (max_current > max_global) {
          max_global = max_current
      }
  }
  return max_global < 0 ? 0 : max_global 
}

let array = [-1, -1, -5, -3, -7, -4, -5, -6, -100, -4]
largestSubarraySum(array);