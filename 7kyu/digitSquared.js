function squareDigits(num){
  let numString = String(num).split('');
  let sqrNum = Number(numString.map( elem => elem ** 2).join(''));
  return sqrNum;
}