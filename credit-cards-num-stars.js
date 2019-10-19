



let ccNumb = (cc) => {
    // let ccArr = [...cc];
    // let emptArr = [];
    // emptArr = ccArr.slice(-4)
    // // ccArr.splice(-4);
  
    // console.log(ccArr);
    // console.log(emptArr)
    // let stars = "";
  
    // for(let i=0; i< ccArr.length -4; i++){
    //   stars += "*";
    // }
    // return [...stars, ...emptArr].join(' ')
    ////////////////////////////////////////////////////////////
    const numToStr = cc.toString();
    const last4digits = cc.slice(-4);
    let stars = "";
    for(let i=0; i< numToStr.length -4; i++){
      stars += "*";
    }
  return stars + last4digits;
  }
  
  ccNumb("123456789001994")