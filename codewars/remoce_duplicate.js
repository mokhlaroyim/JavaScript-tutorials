function distinct(a) {
    let arr_list = [];
    for(let i=0;i<a.length;i++){
        if(!arr_list.includes(a[i])){
            arr_list.push(a[i]);
        }
    }
    return arr_list;
  }
  
  console.log(distinct([1,1,2,3]));