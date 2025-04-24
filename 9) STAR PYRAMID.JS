function starPyramid(rows,i, p =""){
    if(rows+1==i){
    return
    }
    else{
    let space = rows - i
    for(let k =1 ;k<= space;k++){
    p+=" "
    }
    let stars = (2 * i) - 1;
    
 
        for(let k =1 ;k<= stars;k++){
            p+="*"
        }
        for(let k =1 ;k<= space;k++){
            p+=" "
        }
        console.log(p)
        starPyramid(rows,i+1)
    }
    

    
    }
    starPyramid(3,1)
    
    // 2 nd approch 
    
    function starPyramid(rows, i) {
    if (i > rows) {
    return;
    } else {
    let space = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(space + stars + space);
    
 
        starPyramid(rows, i + 1);
    }
    
    
    
    }
    
    starPyramid(3, 1);
    
    // Reverse pyramid 
    
    function starPyramid(rows,i, p =""){
    if(rows==0){
    return
    }
    else{
    let space =i-rows ;
    for(let k =1 ;k<= space;k++){
    p+=" "
    }
    let stars =   (2 * rows) - 1
    
 
        for(let k =1 ;k<= stars;k++){
            p+="*"
        }
    
        for(let k =1 ;k<= space;k++){
            p+=" "
        }
        console.log(p)
        starPyramid(rows-1,i)
    }
    

    
    }
    starPyramid(3,3)
    
    // 2nd approach 
    
    function starPyramid(rows, i) {
    if (rows < 1) return;
    

    let space = " ".repeat(i - rows);
    let stars = "*".repeat(2 * rows - 1);
    
    console.log(space + stars +space); // Removed extra space at the end
    starPyramid(rows - 1, i);
    

    
    }
    
    starPyramid(3, 3);