function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  
  function digitCount(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    return Math.max(...nums.map(n => digitCount(n)));
  }
  
  function radixSort(nums) {
    const maxDigitCount = mostDigits(nums);
  
    for (let k = 0; k < maxDigitCount; k++) {
      const buckets = Array.from({ length: 10 }, () => []);
  
      for (let i = 0; i < nums.length; i++) {
        const digit = getDigit(nums[i], k);
        buckets[digit].push(nums[i]);
      }
  
      nums = [].concat(...buckets);
    }
  
    return nums;
  }
  
  const arr = [170, 45, 75, 90, 802, 24, 2, 66];
  const sortedArr = radixSort(arr);
  console.log(sortedArr); 
  