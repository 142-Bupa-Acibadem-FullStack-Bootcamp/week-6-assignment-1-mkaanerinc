/* Bir sayı dizisi ve hedef değeri veriliyor. Toplamı, hedefe eşit olan ikililerin indexlerini dönen fonksiyonu yazınız.

Örnek 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Çünkü nums[0] + nums[1] == 9, return [0, 1].

Örnek 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Örnek 3:
Input: nums = [3,3], target = 6
Output: [0,1] 

*/

// Çözüm 1 0(n^2)

const nums = [3, 2, 4];
const target = 6;

const findPair = function (nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
        return result;
      }
    }
  }
};

console.log(findPair(nums, target));

// Çözüm 2 - O(n)

const nums2 = [3, 3];
const target2 = 6;

var findPair2 = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let value = target - nums[i];

    if (map[value] !== undefined) {
      return [map[value], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

console.log(findPair2(nums2, target2));
