function findAverage(array) {
  // your code here
  let sum = 0;
  
  if(array == false){
    return 0
  }else{
    array.forEach((element)=>{
      sum += element;
    })
    let ave = sum / array.length;
      return ave 
  }

}

let arr = [1, 2, 3, 4]

findAverage(arr);