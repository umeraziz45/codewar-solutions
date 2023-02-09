function solution(str, ending){
  if(typeof(str) !== 'string' || typeof(ending) !== 'string')
    throw new Error('wrong type')
  if(ending.length > str.length)
    return false
  return str.slice(0 - ending.length) === ending;
}

try{
  console.log(solution('att', 'matt'));
} catch (e){
  console.log(e);
}