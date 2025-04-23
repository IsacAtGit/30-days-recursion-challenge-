function printnumberstaircase(n,i,p,row =""){

    // 0
    // 0 1
    // 0 1 2
    // 0 1 2 3
    // 0 1 2 3 4
    

    if(i==n){
        return
    }
    else if(p<i){
        row+= p+""
         printnumberstaircase(n,i,p+1,row)
    }
    else{
        console.log(row)
         printnumberstaircase(n,i+1,0,"")
    }
    

    
    }
    printnumberstaircase(5,1,0)
    
    // Next time, before writing code:
    // ✅ 1. Identify
    
    // **rows vs. columns**
    
    // .
    
    // ✅ 2. Decide if you need
    
    // **immediate printing**
    
    // or
    
    // **accumulate first**
    
    // .
    
    // ✅ 3. Use
    
    // **two recursive calls**
    
    // : One for rows, one for columns.
    
    // ✅ 4. Print only
    
    // **after a full row is collected**
    
    // if needed.
    
    // 0
    // 1 1
    // 2 2 2
    // 3 3 3 3
    // 4 4 4 4 4
    
    function printnumberstaircase(n,i,p,row =""){
    

    if(i==n){
        return
    }
    else if(p<i){
        row+= i+""
         printnumberstaircase(n,i,p+1,row)
    }
    else{
        console.log(row)
         printnumberstaircase(n,i+1,0,"")
    }
    

    
    }
    printnumberstaircase(5,1,0)
    
    // 01234
    // 0123
    // 012
    // 01
    // 0
    
    function printnumberstaircase(n,p,row =""){

    if(0==n){
        return
    }
    else if(p<n){
       row+= p+""
         printnumberstaircase(n,p+1,row)
    
    }
    else{
        console.log(row)
         printnumberstaircase(n-1,0,"")
    }
    

    
    }
    printnumberstaircase(5,1,0)