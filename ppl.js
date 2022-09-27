

function xt(){

    var t =[1,4,0,3];

    let line =1;
    for(i =0;i<t.length; i++){
       
        let res = exe(t[i]);
        
        console.table(res);
        
      console.debug(line);
       
        line= line +1;
    }

    console.log("test");
  
}

function exe(a){
    return a/0;
}

xt();