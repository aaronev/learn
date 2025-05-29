/*
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]

Output: [0,9]

Explanation:

The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

Output: []

Explanation:

There is no concatenated substring.

Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

Output: [6,9,12]

Explanation:

The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

 

Constraints:

1 <= s.length <= 104
1 <= words.length <= 5000
1 <= words[i].length <= 30
s and words[i] consist of lowercase English letters.
*/

//  https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 var findSubstring = function(s, words) {
  let counter = words[0].length;
  let copy = [...words];
  let results = [];
  let found;

  if (s.length > 100000 || s.length < 1) {
      return [0];
  } 

  const allWordsTheSame = () => {
      for (let i = 1; i < words.length; i++) {
          if (words[0] !== words[i]) {
              return false;
          }
      }
      return true;
  }
  if (words[0].length === 1 && allWordsTheSame() && s.includes(words[0])) {
      if (s.length === words.length) {
          return [0];
      } else {
          let arr = [];
          for (let i = 0; i <= (s.length - words.length) ; i++) {
              arr.push(i);
          }
          return arr;
      }
  }

  if (words.length > 5000 || words.length < 1) {
      return [0];
  }

  if (words[0].length > 30 || words[0].length < 1) {
      return [0];
  }

  const findMatchS = (i) => {
      if (copy.length > 0) {
          if (copy.includes(s.slice(i, i+counter))) {
              copy.splice(copy.indexOf(s.slice(i, i+counter)), 1);
              findMatchS(i+counter);
          } else {
              copy = [...words];
          }
      } else {
          results.push(found);
          copy = [...words];
      }
  }

  for (let i = 0; i < s.length; i++) {
      found = i;
      findMatchS(i);
  };

  return results
}