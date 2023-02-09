function reverseWords(str) {
  // Go for it
  let revArray = str.split(' ');
  let reversedWords = [];

  for (let i = 0; i < revArray.length; i++){
    let reversedWord = revArray[i].split('').reverse().join('');
    reversedWords.push(reversedWord);
  }
  return reversedWords.join(' ');
}

console.log(reverseWords('Hi I am Umer'));