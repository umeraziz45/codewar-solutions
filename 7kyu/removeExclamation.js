function removeExclamationMarks(s) {
  var arr =s.split("");
  arr = arr.filter(function(e){
        return e !== "!";
    })
    return arr.join("");
}