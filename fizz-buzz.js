
for(let i=0; i<21; i++){
    if(i % 3 == 0 && i % 5 == 0 ){
      console.log("divisible both 5 and 3")
    }else if(i % 3 == 0){
      console.log("***")
    }else if(i % 5 == 0 ){
     console.log("divisible 5")
    }else{
    console.log(i)
    }
  }