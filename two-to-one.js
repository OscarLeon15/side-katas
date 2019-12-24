function longest(s1, s2) {
    var strArray,outArray;
    //Sort array by charcters and number by using sort()
    strArray = (s1+s2).split('').sort();
    outArray = [];
    
    for(var i=0;i<strArray.length;i++) {
      if (outArray.includes(strArray[i])) {
      }else{
          outArray.push(strArray[i]);
        }
    }
    
    return outArray.join('');
  
  }